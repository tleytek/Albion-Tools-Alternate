import React from 'react';
import _ from 'lodash';
import Head from 'next/head';
import RadioButtonGroup from '../components/RadioButtonGroup';
import data from '../db/albion';

class Home extends React.Component {
  state = {
    CategoryObj: {},
    SubCategoryObj: {},
    ItemTypeObj: {},
    Category: '',
    SubCategory: '',
    ItemType: ''
  };

  componentDidMount() {
    this.setState({ CategoryObj: data });
  }

  //I want to find a way to re-use this event for navigating further
  //into an object without having to make another helper method
  handleCategoryChange = (event, currentObj, childObj) => {
    const { name, value } = event.target;

    if (name == 'ItemTypeObj') {
      this.setState({ [name]: value });
    }
    this.setState({
      [childObj]: currentObj[value],
      [name]: value
    });
  };

  render() {
    const {
      CategoryObj,
      Category,
      SubCategoryObj,
      SubCategory,
      ItemTypeObj,
      ItemType
    } = this.state;

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
          value={Category}
          name="Category"
          childObj="SubCategoryObj"
        />
        {Category && (
          <RadioButtonGroup
            data={SubCategoryObj}
            handleCategoryChange={this.handleCategoryChange}
            value={SubCategory}
            name="SubCategory"
            childObj="ItemTypeObj"
          />
        )}
        {SubCategory && (
          <RadioButtonGroup
            data={ItemTypeObj}
            handleCategoryChange={this.handleCategoryChange}
            value={ItemType}
            name="ItemType"
          />
        )}
      </div>
    );
  }
}

export default Home;
