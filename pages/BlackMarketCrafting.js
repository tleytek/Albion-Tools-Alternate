import React from 'react';
import _ from 'lodash';
import RadioButtonGroup from '../components/RadioButtonGroup';
import { Categories, Tiers, Enchantments } from '../static/Categories';
import { SubCategories } from '../static/SubCategories';
import { ItemTypes } from '../static/ItemTypes'
import Grid from '@material-ui/core/Grid';
import Select from '../components/Select';

class BlackMarketCrafting extends React.Component {
  state = {
    Categories: [],
    SubCategories: [],
    ItemTypes: [],
    Tiers: [],
    Enchantments: [],
    Category: '',
    SubCategory: '',
    ItemType: '',
    Tier: 'All',
    Enchantment: ''
  };

  componentDidMount() {
    this.setState({ Categories, Tiers, Enchantments, SubCategories, ItemTypes });
  }

  handleChange = (name, value) => {
    if (name == 'Category') this.setState({ ItemType: '', SubCategory: '' });
    if (name == 'SubCategory') this.setState({ ItemType: '' });
    this.setState({ [name]: value });
  };

  render() {
    const { Tiers, Enchantments, Categories, SubCategories, ItemTypes, Category, SubCategory } = this.state;

    return (
      <Grid container direction="column">
        <Grid container direction="row">
          <RadioButtonGroup data={Categories} handleChange={this.handleChange} name="Category" />
          {Category && (
            <RadioButtonGroup
              data={SubCategories[Category]}
              handleChange={this.handleChange}
              name="SubCategory"
            />
          )}
          {SubCategory && (
            <RadioButtonGroup
              data={ItemTypes[SubCategory]}
              handleChange={this.handleChange}
              name="ItemType"
            />
          )}
        </Grid>
        <Grid container direction="row">
          <Select data={Tiers} handleChange={this.handleChange} name="Tier" />
        </Grid>
      </Grid>
    );
  }
}

export default BlackMarketCrafting;
