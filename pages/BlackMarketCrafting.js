import React from 'react';
import _ from 'lodash';
import Head from 'next/head';
import RadioButtonGroup from '../components/RadioButtonGroup';
import data from '../db/albion';

class Home extends React.Component {
  state = {
    CategoryObj: {},
    SubCategoryObj: {},
    ItemTypeObj: {}
  };

  componentDidMount() {
    this.setState({ CategoryObj: data });
  }

  //I want to find a way to re-use this event for navigating further
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
        <Head>
          <title>Albion Tools</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

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

export default Home;
