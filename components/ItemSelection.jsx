import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from './Select';
import ItemTypes from '../static/ItemTypes';
import SubCategories from '../static/SubCategories';
import { Categories, Tiers, Enchantments } from '../static/Categories';

const ItemSelection = props => {
  const { currentValue, onCategoryChange } = props;
  const { Category, SubCategory, ItemType, Tier, Enchantment } = currentValue;
  return (
    <div>
      <Grid container item>
        <Select
          data={Categories}
          onCategoryChange={onCategoryChange}
          type="Category"
          currentValue={Category}
        />
        {Category && (
          <Select
            data={SubCategories[Category]}
            onCategoryChange={onCategoryChange}
            type="SubCategory"
            currentValue={SubCategory}
          />
        )}
        {SubCategory && (
          <Select
            data={ItemTypes[SubCategory]}
            onCategoryChange={onCategoryChange}
            type="ItemType"
            currentValue={ItemType}
          />
        )}
      </Grid>
      <Grid container item>
        <Select data={Tiers} onCategoryChange={onCategoryChange} type="Tier" currentValue={Tier} />
        <Select
          data={Enchantments}
          onCategoryChange={onCategoryChange}
          type="Enchantment"
          currentValue={Enchantment}
        />
      </Grid>
    </div>
  );
};
export default ItemSelection;
