import React from 'react';
import RadioButtonGroup from '../components/RadioButtonGroup';
import { Categories, Tiers, Enchantments } from '../static/Categories';
import { SubCategories } from '../static/SubCategories';
import { ItemTypes } from '../static/ItemTypes';
import Grid from '@material-ui/core/Grid';
import Select from '../components/Select';

class BlackMarketCrafting extends React.Component {
  state = {
    Category: '',
    SubCategory: '',
    ItemType: '',
    Tier: 'T4',
    Enchantment: '0',
    UniqueName: ''
  };

  /* Making sure ItemType state is assigned/updated within 
  the component before firing our item API */
  componentDidUpdate() {
    //Destructure state for cleaner string template literal
    const { ItemType, Enchantment, Tier } = this.state;

    /*Until ItemType is selected, only then will changes
      to Tier and Enchantment also fire the item search api, 
      but until then they don't*/
    if (ItemType !== '') {
      console.log(`${Tier}${ItemType}${Enchantment}`);
    }
  }

  onCategoryChange = (name, value) => {
    //Removing old state values when a user changes a parent category
    if (name == 'Category') this.setState({ ItemType: '', SubCategory: '' });
    if (name == 'SubCategory') this.setState({ ItemType: '' });

    //ES6 key and value assigning for reusable 'on' function handler with setState
    this.setState({ [name]: value });

    // if (name == 'ItemType' || name == 'Tier' || name == 'Enchantment') {
    //   console.log(ItemType);
    // }
  };

  render() {
    const { Category, SubCategory } = this.state;

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
        <Grid container direction="row" />
      </Grid>
    );
  }
}

export default BlackMarketCrafting;
