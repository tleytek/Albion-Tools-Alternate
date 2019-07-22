import React from 'react';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import ItemInfo from '../components/ItemInfo';
import ItemSelection from '../components/ItemSelection';
import ProfitTable from '../components/ProfitTable';
import CalculationOptions from '../components/CalculationOptions';
import { getPrice, getItemData } from '../lib/API';

class BlackMarketCrafting extends React.Component {
  state = {
    Category: '',
    SubCategory: '',
    ItemType: '',
    UniqueName: '',
    Tier: 'T4',
    Enchantment: '',
    EquipmentItem: '',
    ItemPrice: '',
    ResourcePrices: '',
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

  calculateProfit = () => {
    let ReturnDiscountMin = 0;
    let ReturnDiscountMax = 0;
    let SubTotal = 0;
    const { Tax, EquipmentItem, ReturnRate, ResourcePrices, ItemPrice } = this.state;
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

    const Profit = ItemPrice.buy_price_max - TotalCost;
    this.setState({ UsageFee, SubTotal, ReturnDiscountMin, TotalCost, Profit });
  };

  fetchPrices = async () => {
    const { EquipmentItem } = this.state;
    const { craftingrequirements } = EquipmentItem;
    const { craftresource } = craftingrequirements;

    const ItemPrice = await getPrice(EquipmentItem.uniquename, 'BlackMarket');
    // Promise.all is necessary to resolve all promises from each map return
    const ResourcePrices = await Promise.all(
      craftresource.map(el => {
        return getPrice(el.uniquename, 'Caerleon');
      })
    );
    this.setState({ ResourcePrices, ItemPrice }, this.calculateProfit);
    // this.calculateProfit();
  };

  onResourcePriceChange = (name, value) => {
    const { ResourcePrices, ItemPrice } = this.state;
    if (name === 'ItemPrice') {
      ItemPrice.buy_price_max = value;
      this.setState({ ItemPrice });
    } else {
      ResourcePrices[name].sell_price_min = value;
      this.setState({ ResourcePrices });
    }
  };

  fetchEquipmentItem = async () => {
    const { ItemType, Enchantment, Tier } = this.state;
    const EquipmentItem = await getItemData(`${Tier}${ItemType}${Enchantment}`);

    // const EquipmentItem = ObjPrune(EquipmentItems[index], Enchantment);
    await this.setState({
      EquipmentItem,
      ResourcePrices: ''
    });
    this.fetchPrices();
  };

  onInputChange = (name, value) => {
    const { ItemType, Tier, Enchantment, UniqueName } = this.state;

    // Removing old state values when a user changes a parent category
    switch (name) {
      case 'Category':
        this.setState({
          ItemType: '',
          SubCategory: '',
          EquipmentItem: '',
          [name]: value
        });
        break;
      case 'SubCategory':
        this.setState({ ItemType: '', EquipmentItem: '', [name]: value });
        break;
      case 'ItemType':
        if (value) {
          this.setState(
            {
              UniqueName: `${Tier}${value}${Enchantment}`,
              [name]: value
            },
            this.fetchEquipmentItem
          );
        } else {
          this.setState({
            [name]: value
          });
        }
        break;
      case 'Tier':
        if (UniqueName && ItemType) {
          this.setState(
            {
              UniqueName: `${value}${ItemType}${Enchantment}`,
              [name]: value
            },
            this.fetchEquipmentItem
          );
        } else {
          this.setState({ [name]: value });
        }
        break;
      case 'Enchantment':
        if (UniqueName && ItemType) {
          this.setState(
            {
              UniqueName: `${Tier}${ItemType}${value}`,
              [name]: value
            },
            this.fetchEquipmentItem
          );
        } else {
          this.setState({ [name]: value });
        }
        break;
      default:
        this.setState({ [name]: value });
    }
  };

  render() {
    const {
      Category,
      SubCategory,
      ItemType,
      Tier,
      Enchantment,
      EquipmentItem,
      Tax,
      ReturnRate,
      FocusReturnRate,
      ItemPrice,
      ResourcePrices,
      UsageFee,
      SubTotal,
      ReturnDiscountMin,
      TotalCost,
      Profit
    } = this.state;
    // All of our visual content
    return (
      <Grid container>
        <Grid container item xs={12} justify="space-evenly">
          <ItemSelection
            onCategoryChange={this.onInputChange}
            currentValue={{ Category, SubCategory, ItemType, Tier, Enchantment }}
          />
        </Grid>

        {EquipmentItem && (
          <React.Fragment>
            <Grid container item xs={12} justify="space-evenly">
              <CalculationOptions
                Tax={Tax}
                ReturnRate={ReturnRate}
                FocusReturnRate={FocusReturnRate}
                onInputChange={this.onInputChange}
                fetchPrices={this.fetchPrices}
                calculateProfit={this.calculateProfit}
              />
            </Grid>
            <Grid container item xs={6} direction="column">
              <ItemInfo
                EquipmentItem={EquipmentItem}
                ItemPrice={ItemPrice}
                ResourcePrices={ResourcePrices}
                onResourcePriceChange={this.onResourcePriceChange}
                calculateProfit={this.calculateProfit}
              />
            </Grid>
            <Grid item xs={6}>
              <ProfitTable
                UsageFee={UsageFee}
                SubTotal={SubTotal}
                ReturnDiscountMin={ReturnDiscountMin}
                TotalCost={TotalCost}
                Profit={Profit}
              />
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    );
  }
}

export default BlackMarketCrafting;
