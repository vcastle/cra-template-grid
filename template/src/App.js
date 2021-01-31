import React, { Component } from "react";
import { Header } from "./components/header/header.component";
import ITEM_DATA from "./components/card-list/items.data";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: ITEM_DATA,
    };
  }

  componentDidMount() {}

  render() {
    const { items } = this.state;
    return (
      <div>
        <Header headerText="React Grid Template"></Header>
        <div className="card-list">
            <CardList items={items}></CardList>
        </div>
      </div>
    );
  }
}

export default App;
