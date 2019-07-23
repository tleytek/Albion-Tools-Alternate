import React from 'react';
import Select from './Select';
import ItemTypes from '../static/ItemTypes';
import SubCategories from '../static/SubCategories';
import Categories from '../static/Categories';
import Tiers from '../static/Tiers';
import Enchantments from '../static/Enchantments';

const ItemSelection = props => {
  const { currentValue, onCategoryChange } = props;
  const { Category, SubCategory, ItemType, Tier, Enchantment } = currentValue;
  return (
    <React.Fragment>
      <Select
        data={Categories}
        onCategoryChange={onCategoryChange}
        type="Category"
        currentValue={Category}
      />
      <Select
        data={SubCategories[Category]}
        onCategoryChange={onCategoryChange}
        type="SubCategory"
        currentValue={SubCategory}
      />
      <Select
        data={ItemTypes[SubCategory]}
        onCategoryChange={onCategoryChange}
        type="ItemType"
        currentValue={ItemType}
      />

      <Select data={Tiers} onCategoryChange={onCategoryChange} type="Tier" currentValue={Tier} />
      <Select
        data={Enchantments}
        onCategoryChange={onCategoryChange}
        type="Enchantment"
        currentValue={Enchantment}
      />
    </React.Fragment>
  );
};

export default ItemSelection;
