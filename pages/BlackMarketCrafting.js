import React from 'react';
import RadioButtonGroup from '../components/RadioButtonGroup';
import ItemDisplay from '../components/ItemTypeDisplay';
import { Categories, Tiers, Enchantments } from '../static/Categories';
import { SubCategories } from '../static/SubCategories';
import { ItemTypes } from '../static/ItemTypes';
import Grid from '@material-ui/core/Grid';
import Select from '../components/Select';
import { getItemData } from '../lib/api';

class BlackMarketCrafting extends React.Component {
  state = {
    Category: '',
    SubCategory: '',
    ItemType: '',
    Tier: 'T4',
    Enchantment: '',
    itemData: ''
  };

  /* Making sure ItemType state is assigned/updated within
  the component before firing our item API */
  async componentDidUpdate(...[, prevState]) {
    //Destructure state for cleaner code
    const { ItemType, Enchantment, Tier } = this.state;

    //Not an ideal solution
    if (
      ItemType !== prevState.ItemType ||
      Enchantment !== prevState.Enchantment ||
      Tier !== prevState.Tier
    ) {
      /*Until ItemType is changed, only then will changes
      to Tier and Enchantment also fire the item search api,
      but until then they don't*/
      if (ItemType !== '') {
        //Get ItemData from DB then get the prices for everything
        getItemData(`${Tier}${ItemType}${Enchantment}`).then(res => {
          this.setState({ ItemData: res.data[0] });
        });
      }
    }
  }

  onCategoryChange = (name, value) => {
    //Removing old state values when a user changes a parent category
    name == 'Category' && this.setState({ ItemType: '', SubCategory: '', ItemData: '' });
    name == 'SubCategory' && this.setState({ ItemType: '', ItemData: '' });
    //ES6 key and value assigning for reusable 'on' function handler with setState
    this.setState({ [name]: value });
  };

  render() {
    //Destructuring
    const { Category, SubCategory, ItemData } = this.state;

    //All of our visual content
    return (
      <Grid container direction="column">
        <Grid container direction="row">
          <RadioButtonGroup
            data={Categories}
            onCategoryChange={this.onCategoryChange}
            name="Category"
          />
          {Category && (
            <RadioButtonGroup
              data={SubCategories[Category]}
              onCategoryChange={this.onCategoryChange}
              name="SubCategory"
            />
          )}
          {SubCategory && (
            <RadioButtonGroup
              data={ItemTypes[SubCategory]}
              onCategoryChange={this.onCategoryChange}
              name="ItemType"
            />
          )}
        </Grid>
        <Grid container direction="row">
          <Select
            data={Tiers}
            onCategoryChange={this.onCategoryChange}
            name="Tier"
            default={this.state.Tier}
          />
          <Select
            data={Enchantments}
            onCategoryChange={this.onCategoryChange}
            name="Enchantment"
            default={this.state.Enchantment}
          />
        </Grid>
        {ItemData && <ItemDisplay itemData={ItemData} />}
      </Grid>
    );
  }
}

export default BlackMarketCrafting;
