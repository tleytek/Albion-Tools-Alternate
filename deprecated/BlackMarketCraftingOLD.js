import React from 'react';
import _ from 'lodash';
import RadioButtonGroup from '../components/RadioButtonGroup';
import data from '../static/BlkMrktCat.json';

class BlackMarketCrafting extends React.Component {
  state = {
    CategoryObj: {},
    SubCategoryObj: {},
    ItemTypeObj: {}
  };

  componentDidMount() {
    this.setState({ CategoryObj: data });
  }

  //I wanted to find a way to re-use this event for navigating further
  //into an object without having to make another helper method
  handleCategoryChange = (value, currentObj, childObj) => {
    //This is for an issue where the user selects another category but still sees the
    //Item Type of a previous SubCategory because when a new Category is chosen, the rendering
    //conditions for ItemType are still met which causes confusion.
    if (childObj == 'SubCategoryObj') {
      this.setState({ ItemTypeObj: {} });
    }
    this.setState({
      [childObj]: currentObj[value]
    });
  };

  render() {
    const { CategoryObj, SubCategoryObj, ItemTypeObj } = this.state;

    return (
      <div>
        {/* So my trade off for having only 1 helper method for radioButton changes is a 
        component with alot of props... */}
        <RadioButtonGroup
          data={CategoryObj}
          handleCategoryChange={this.handleCategoryChange}
          name="Category"
          childObj="SubCategoryObj"
        />
        {SubCategoryObj && (
          <RadioButtonGroup
            data={SubCategoryObj}
            handleCategoryChange={this.handleCategoryChange}
            name="SubCategory"
            childObj="ItemTypeObj"
          />
        )}
        {ItemTypeObj && (
          <RadioButtonGroup
            data={ItemTypeObj}
            handleCategoryChange={this.handleCategoryChange}
            name="ItemType"
          />
        )}
      </div>
    );
  }
}

export default BlackMarketCrafting;
