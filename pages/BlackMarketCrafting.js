import React from 'react';
import RadioButtonGroup from '../components/RadioButtonGroup';
import ItemTypeDisplay from '../components/ItemTypeDisplay';
import { Categories, Tiers, Enchantments } from '../static/Categories';
import { SubCategories } from '../static/SubCategories';
import ItemTypes from '../static/ItemTypes';
import Grid from '@material-ui/core/Grid';
import Select from '../components/Select';
import EquipmentItems from '../static/items.json';
import ObjPrune from '../lib/ObjPrune';
import _ from 'lodash';

// const { Items } = items;

class BlackMarketCrafting extends React.Component {
  state = {
    Category: '',
    SubCategory: '',
    ItemType: '',
    Tier: 'T4',
    Enchantment: '',
    EquipmentItems: {},
    EquipmentItem: {}
  };

  componentDidMount() {
    this.setState({ EquipmentItems });
  }


  /* Making sure ItemType state is assigned/updated within
  the component before firing our item API */
  async componentDidUpdate(...[, prevState]) {
    //Destructure state for cleaner code
    const { ItemType, Enchantment, Tier, EquipmentItems } = this.state;

    //I really don't like this solution, future todo is making it cleaner
    if (
      (ItemType !== prevState.ItemType ||
        Enchantment !== prevState.Enchantment ||
        Tier !== prevState.Tier) &&
      ItemType !== ''
    ) {
      //Get ItemData from DB then get the prices for everything
      const index = await _.findIndex(EquipmentItems, {
        uniquename: `${Tier}${ItemType}`
      });
      const EquipmentItem = await ObjPrune(EquipmentItems[index], Enchantment);
      this.setState({ EquipmentItem });

    }
  }

  onCategoryChange = (name, value) => {
    //Removing old state values when a user changes a parent category
    name == 'Category' && this.setState({ ItemType: '', SubCategory: '', EquipmentItem: '' });
    name == 'SubCategory' && this.setState({ ItemType: '', EquipmentItem: '' });

    //ES6 key and value assigning for reusable 'on' function handler with setState
    this.setState({ [name]: value });
  };

  render() {
    //Destructuring
    const { Category, SubCategory, ItemType, Tier, Enchantment, EquipmentItem } = this.state;


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
        {EquipmentItem && <ItemTypeDisplay fullItemName={`${Tier}${ItemType}${Enchantment}`} />}

      </Grid>
    );
  }
}

export default BlackMarketCrafting;
