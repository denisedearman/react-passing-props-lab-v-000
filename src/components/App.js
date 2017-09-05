import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{

  constructor(){

    super();

    this.state = {
      fruit: [],
      currentFilter: null,
      filters: []
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  componentWillMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));

    this.fetchFilters();
  }

  render(){
    return <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} onUpdateFilter={this.handleFilterChange}/>;
  }
}

export default App;
