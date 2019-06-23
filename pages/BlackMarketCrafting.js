import React from 'react';
import _ from 'lodash';
import RadioButtonGroup from '../components/RadioButtonGroup';
import { Categories, Tiers, Enchantments } from '../static/Categories';

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
    this.setState({ Categories, Tiers, Enchantments });
  }

  handleChange = (name, value) => {};

  render() {
    const { Categories, SubCategories, ItemTypes } = this.state;

    return (
      <div>
        <RadioButtonGroup data={Categories} handleChange={this.handleChange} name="Category" />
      </div>
    );
  }
}

export default BlackMarketCrafting;
