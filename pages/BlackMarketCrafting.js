import React from 'react';
import { Categories, Tiers, Enchantments } from '../static/Categories';
import SubCategories from '../static/SubCategories';
import ItemTypes from '../static/ItemTypes';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '../components/Select.jsx';
import EquipmentItems from '../static/items.json';
import ObjPrune from '../lib/ObjPrune';
import _ from 'lodash';
import TextInput from '../components/TextField';
import API from '../lib/API';
class BlackMarketCrafting extends React.Component {
  state = {
    Category: '',
    SubCategory: '',
    ItemType: '',
    Tier: 'T4',
    Enchantment: '',
    EquipmentItems: {},
    EquipmentItem: 'e'
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
      ItemType
    ) {
      const index = await _.findIndex(EquipmentItems, {
        uniquename: `${Tier}${ItemType}`
      });
      const EquipmentItem = await ObjPrune(EquipmentItems[index], Enchantment);
      const ItemPrice = await API.getPrice(EquipmentItem.uniquename, 'Black Market');
      let ResourcePrice = [];
      _.castArray(EquipmentItem.craftingrequirements.craftresource).forEach(el => {
        API.getPrice(el.uniquename, 'Caerleon').then(res => {
          ResourcePrice.push(res);
          console.log(res);
        });
      });
      this.setState({ EquipmentItem, ItemPrice, ResourcePrice });
    }
  }

  onCategoryChange = (name, value) => {
    //Removing old state values when a user changes a parent category
    name == 'Category' && this.setState({ ItemType: '', SubCategory: '', EquipmentItem: '' });
    name == 'SubCategory' && this.setState({ ItemType: '', EquipmentItem: '' });

    //ES6 key and value assigning for reusable 'on' function handler with setState
    this.setState({ [name]: value });
  };

  itemSelection() {
    //Destructuring
    const { Category, SubCategory, ItemType, Tier, Enchantment } = this.state;
    return (
      <React.Fragment>
        <Grid container item>
          <Select
            data={Categories}
            onCategoryChange={this.onCategoryChange}
            type="Category"
            currentValue={Category}
          />
          {Category && (
            <Select
              data={SubCategories[Category]}
              onCategoryChange={this.onCategoryChange}
              type="SubCategory"
              currentValue={SubCategory}
            />
          )}
          {SubCategory && (
            <Select
              data={ItemTypes[SubCategory]}
              onCategoryChange={this.onCategoryChange}
              type="ItemType"
              currentValue={ItemType}
            />
          )}
        </Grid>
        <Grid container item>
          <Select
            data={Tiers}
            onCategoryChange={this.onCategoryChange}
            type="Tier"
            currentValue={Tier}
          />
          <Select
            data={Enchantments}
            onCategoryChange={this.onCategoryChange}
            type="Enchantment"
            currentValue={Enchantment}
          />
        </Grid>
      </React.Fragment>
    );
  }

  itemDisplay() {
    const { Category, SubCategory, ItemType, Tier, Enchantment, EquipmentItem } = this.state;
    return (
      <Grid container direction="column" spacing={3}>
        <Grid container item>
          <Grid item xs>
            <TextInput name={EquipmentItem.uniquename} price={this.state.ItemPrice} />
          </Grid>
          <Grid item xs>
            <TextInput name={EquipmentItem.uniquename} price={this.state.ItemPrice} />
          </Grid>
          <Grid item xs>
            <TextInput name={EquipmentItem.uniquename} price={this.state.ItemPrice} />
          </Grid>
          <Grid item xs>
            <button>Hi</button>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item>
            <Typography>ItemDetail</Typography>
            <Typography variant="h3">item</Typography>
          </Grid>
          <img
            src={`https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${Tier}${ItemType}${Enchantment}`}
            alt="Item"
          />
          {`itemDetail`}
        </Grid>
        <Grid container justify="center" item md={12} lg={6}>
          {`costDetail`}
        </Grid>
      </Grid>
    );
  }

  render() {
    //All of our visual content
    return (
      <Grid container direction="column">
        {this.itemSelection()}
        {this.state.EquipmentItem && this.itemDisplay()}
      </Grid>
    );
  }
}

export default BlackMarketCrafting;
