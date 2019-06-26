import React from 'react';
import _ from 'lodash';
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
    Tier: '',
    Enchantment: ''
  };

  onCategoryChange = (name, value) => {
    if (name == 'Category') this.setState({ ItemType: '', SubCategory: '' });
    if (name == 'SubCategory') this.setState({ ItemType: '' });
    this.setState({ [name]: value });
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
          <Select data={Tiers} onCategoryChange={this.onCategoryChange} name="Tier" />
          <Select data={Enchantments} onCategoryChange={this.onCategoryChange} name="Enchantment" />
        </Grid>
      </Grid>
    );
  }
}

export default BlackMarketCrafting;
