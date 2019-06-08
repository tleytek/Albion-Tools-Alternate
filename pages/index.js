import React from 'react';
import _ from 'lodash';
import Head from 'next/head';
import Link from 'next/link';
// import { RadioButtonGroup } from '../components/RadioButtonGroup';
import data from '../db/albion';
import { FilterObjectAsArray } from '../utils/FilterObject';

class Home extends React.Component {
  state = { Category: {}, SubCategory: {}, UserCategorySelection: 'Armor', UserSubCatSelection: 'ClothArmor' };

  componentDidMount() {
    const { Category, UserCategorySelection, UserSubCatSelection } = this.state;
    this.setState({ Category: data[UserCategorySelection] });
    this.setState({ SubCategory: data[UserCategorySelection][UserSubCatSelection] });
    console.log(data.Armor.ClothArmor);
    // this.setState({ SubCategory: FilterObjectAsArray(Category, ([name]) => name === 'Cloth Armor') });
  }

  handleCategoryChange = event => {
    const { value } = event.target;
    this.setState({ Category: value });
    if (this.state.Category) this.handleSubCatChange;
  };

  render() {
    return (
      <div>
        <Head>
          <title>Albion Tools</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <p>Hello world</p>
        <Link href="/about">
          <a>About Page</a>
        </Link>
        {/* <RadioButtonGroup data={data} handleCategoryChange={this.handleCategoryChange} /> */}
        {/* NOTE: ([name]) is array destruturing, it takes the first element of the
        arrays and names it so we can properly identify it for filtering, remember 
        the name is arbitrary */}
      </div>
    );
  }
}

export default Home;
