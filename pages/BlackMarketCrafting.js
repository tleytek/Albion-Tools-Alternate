import React from 'react';
import _ from 'lodash';
import RadioButtonGroup from '../components/RadioButtonGroup';
import { Categories, Tiers, Enchantments } from '../static/Categories';
import { SubCategories } from '../static/SubCategories';
import Grid from '@material-ui/core/Grid';

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
    Tier: '',
    Enchantment: ''
  };

  componentDidMount() {
    this.setState({ Categories, Tiers, Enchantments, SubCategories });
    console.log(SubCategories['Armor']);
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { Categories, SubCategories, ItemTypes, Category } = this.state;

    return (
      <div>
        <Grid container direction="row">
          <RadioButtonGroup data={Categories} handleChange={this.handleChange} name="Category" />
          {Category && (
            <RadioButtonGroup
              data={SubCategories[Category]}
              handleChange={this.handleChange}
              name="SubCategory"
            />
          )}
        </Grid>
      </div>
    );
  }
}

export default BlackMarketCrafting;
