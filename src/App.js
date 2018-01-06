import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/businesslist.js';
import SearchBar from './components/SearchBar/searchbar.js';
import Yelp from './util/Yelp.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortby) {
    Yelp.search(term, location, sortby).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp = {this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
