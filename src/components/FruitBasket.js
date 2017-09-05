import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, onUpdateFilter})=>{
    return (
      <div className="fruit-basket">
        <Filter filter={filters} handleChange={onUpdateFilter} />
        <FilteredFruitList
          filter={currentFilter} fruit={fruit} />
      </div>
    );
}


FruitBasket.defaultProps = {
  filters: [],
  currentFilter: null,
  fruit: [],
  updateFilterCallback: () => {}
}

export default FruitBasket;
