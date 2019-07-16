import React from 'react';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import moment from 'moment';
import ItemSelection from '../components/ItemSelection';
import TextInput from '../components/TextInput';
import ItemInfo from '../components/ItemInfo';
import EquipmentItems from '../static/items.json';
import ObjPrune from '../lib/ObjPrune';
import API from '../lib/API';

class BlackMarketCrafting extends React.Component {
  state = {
    Category: '',
    SubCategory: '',
    ItemType: '',
    UniqueName: '',
    Tier: 'T4',
    Enchantment: '',
    EquipmentItem: '',
    Tax: 59,
    ReturnRate: 15,
    FocusReturnRate: 44,
    UsageFee: '',
    SubTotal: '',
    ReturnDiscountMin: '',
    ReturnDiscountMax: '',
    LaborDiscount: false,
    TotalCost: ''
  };

  /* Making sure ItemType state is assigned/updated within
  the component before firing our item API */
  componentDidUpdate(...[, prevState]) {
    // Destructure
    const { UniqueName } = this.state;
    /* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
    UniqueName !== prevState.UniqueName && this.fetchEquipmentItem();
  }

  calculateProfit = () => {
    let ReturnDiscountMin = 0;
    let ReturnDiscountMax = 0;
    let SubTotal = 0;
    const { Tax, EquipmentItem, ReturnRate, ResourcePrices } = this.state;
    const { craftingrequirements } = EquipmentItem;
    const { craftresource } = craftingrequirements;
    const UsageFee = _.ceil(Tax * (EquipmentItem.itemValue * 0.05));
    craftresource.forEach((el, index) => {
      if (!el.maxreturnamount) {
        ReturnDiscountMin +=
          _.floor((ReturnRate / 100) * _.toNumber(el.count)) * ResourcePrices[index].sell_price_min;
        ReturnDiscountMax +=
          _.ceil((ReturnRate / 100) * _.toNumber(el.count)) * ResourcePrices[index].sell_price_min;
      }
      SubTotal += el.count * ResourcePrices[index].sell_price_min;
    });
    const TotalCost = UsageFee + SubTotal - ReturnDiscountMax;
    this.setState({ UsageFee, SubTotal, ReturnDiscountMin, TotalCost });
    // console.log(UsageFee);
    // console.log(SubTotal);
    // console.log(TotalReturnMin);
    // console.log(TotalCost);
  };

  fetchPrices = async () => {
    const { EquipmentItem } = this.state;
    const { craftingrequirements } = EquipmentItem;
    const { craftresource } = craftingrequirements;

    // Promise.all is necessary to resolve all promises from each map return
    const ResourcePrices = await Promise.all(
      craftresource.map(el => {
        return API.getPrice(el.uniquename, 'Caerleon');
      })
    );
    this.setState({ ResourcePrices });
    this.calculateProfit();
  };

  onResourcePriceChange = (index, value) => {
    const { ResourcePrices } = this.state;
    ResourcePrices[index].sell_price_min = value;
    this.setState({ ResourcePrices });
  };

  fetchEquipmentItem = async () => {
    const { ItemType, Enchantment, Tier } = this.state;

    const index = _.findIndex(EquipmentItems, {
      uniquename: `${Tier}${ItemType}`
    });
    const EquipmentItem = ObjPrune(EquipmentItems[index], Enchantment);
    const ItemPrice = await API.getPrice(EquipmentItem.uniquename, 'Black Market');
    const { buy_price_max, buy_price_max_date } = ItemPrice;
    this.setState({
      ItemPrice: { buy_price_max, buy_price_max_date },
      EquipmentItem,
      ResourcePrices: ''
    });
    this.fetchPrices();
  };

  onTextInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  onCategoryChange = (name, value) => {
    const { ItemType, Tier, Enchantment, UniqueName } = this.state;

    // Removing old state values when a user changes a parent category
    // eslint-disable-next-line default-case
    switch (name) {
      case 'Category':
        this.setState({ ItemType: '', SubCategory: '', EquipmentItem: '', [name]: value });
        break;
      case 'SubCategory':
        this.setState({ ItemType: '', EquipmentItem: '', [name]: value });
        break;
      case 'ItemType':
        this.setState({
          UniqueName: `${Tier}${value}${Enchantment}`,
          [name]: value
        });
        break;
      case 'Tier':
        if (UniqueName) {
          this.setState({
            UniqueName: `${value}${ItemType}${Enchantment}`,
            [name]: value
          });
        } else {
          this.setState({ [name]: value });
        }
        break;
      case 'Enchantment':
        if (UniqueName) {
          this.setState({
            UniqueName: `${Tier}${ItemType}${value}`,
            [name]: value
          });
        } else {
          this.setState({ [name]: value });
        }
        break;
    }
  };

  itemDisplay() {
    const {
      EquipmentItem,
      Tax,
      ReturnRate,
      FocusReturnRate,
      ItemPrice,
      ResourcePrices
    } = this.state;
    return (
      <Grid container>
        {/* Start Top Row */}
        <Grid container item alignItems="center">
          <Grid item xs>
            <TextInput
              label="Usage Fee"
              name="Tax"
              value={Tax}
              margin="normal"
              variant="outlined"
              onTextInputChange={this.onTextInputChange}
            />
          </Grid>
          <Grid item xs>
            <TextInput
              label="Return Rate"
              name="ReturnRate"
              value={ReturnRate}
              margin="normal"
              variant="outlined"
              onTextInputChange={this.onTextInputChange}
            />
          </Grid>
          <Grid item xs>
            <TextInput
              label="Focus Return Rate"
              name="FocusReturnRate"
              value={FocusReturnRate}
              margin="normal"
              variant="outlined"
              onTextInputChange={this.onTextInputChange}
              disabled
            />
          </Grid>
          <Grid item xs>
            <ButtonGroup variant="contained" color="secondary" fullWidth>
              <Button onClick={this.fetchPrices}>Get Prices</Button>
              <Button>Calculate</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        {/* End Top Row */}

        {/* Start Bottom Row */}
        <Grid container item>
          {/* Start Left Column */}
          <Grid container item xs direction="column">
            {/* Start Name Row */}
            <Grid container item alignItems="center">
              <Typography variant="h4">{EquipmentItem.verboseName}</Typography>
            </Grid>
            {/* End Name Row */}

            {/* Start Image and Info Row */}
            <Grid container item alignItems="center">
              <img
                src={`https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${
                  EquipmentItem.uniquename
                }`}
                alt="Item"
                style={{ width: '25%', height: 'auto' }}
              />
              <TextInput
                label="Market Price (ea)"
                value={ItemPrice.buy_price_max}
                variant="outlined"
              />
            </Grid>
            {/* End Image and Info Row */}

            {/* Start Crafting Ingredients and market Value AppBar Row  */}
            <Grid container item>
              <AppBar position="relative" square={false}>
                <Toolbar color="primary" variant="dense">
                  Crafting Materials
                </Toolbar>
              </AppBar>
            </Grid>
            {/* End Crafting Ingredients and Market Value AppBar Row */}
            {/* Start Resource Display Rows */}
            {ResourcePrices &&
              EquipmentItem.craftingrequirements.craftresource.map((el, index) => (
                <Grid
                  container
                  item
                  justify="space-between"
                  alignItems="center"
                  key={el.uniquename}
                >
                  <Grid item xs>
                    <img
                      src={`https://gameinfo.albiononline.com/api/gameinfo/items/${el.uniquename}`}
                      alt="Item"
                      style={{ width: '35%', height: 'auto' }}
                    />
                  </Grid>
                  <Grid container item xs direction="column" alignItems="center">
                    <TextInput
                      label="Market Price (ea)"
                      value={ResourcePrices[index].sell_price_min}
                      variant="outlined"
                      margin="dense"
                      onTextInputChange={this.onResourcePriceChange}
                      name={index}
                    />
                    <Typography variant="subtitle2">
                      {moment(ResourcePrices[index].sell_price_min_date).fromNow()}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            {/* End Resource Display Row1 */}
          </Grid>
          {/* End Left */}

          {/* Start Right */}
          <Grid container item xs direction="column" />
        </Grid>
        {/* End Bottom Row */}
      </Grid>
    );
  }

  render() {
    const {
      Category,
      SubCategory,
      ItemType,
      Tier,
      Enchantment,
      EquipmentItem,
      ResourcePrices
    } = this.state;
    // All of our visual content
    return (
      <Grid container direction="column">
        <Grid container item justify="center">
          <Typography variant="h3">Black Market Crafting</Typography>
        </Grid>
        <ItemSelection
          onCategoryChange={this.onCategoryChange}
          currentValue={{ Category, SubCategory, ItemType, Tier, Enchantment }}
        />
        {EquipmentItem && this.itemDisplay()}
      </Grid>
    );
  }
}

export default BlackMarketCrafting;
