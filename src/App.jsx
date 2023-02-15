import React, { Children, Component } from "react";
import Carts from "./components/Carts";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
import { Divider, Button } from "antd";

export default class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 1,
        name: "Amethyst",
        image:
          "https://www.diffusional.com.au/assets/alt_1/PB-G-CL.jpg?20211101135407",
      },
      {
        id: 2,
        value: 1,
        name: "Cloud",
        image:
          "https://www.diffusional.com.au/assets/alt_1/PB-G-CL.jpg?20211101135407",
      },
      {
        id: 3,
        value: 1,
        name: "Senerity",
        image:
          "https://www.diffusional.com.au/assets/alt_1/PB-G-CL.jpg?20211101135407",
      },
      {
      id: 4,
      value: 1,
      name: "Euphoria",
      image:
        "https://www.diffusional.com.au/assets/alt_1/PB-G-CL.jpg?20211101135407",
    },
    ],
    carts: [],
  };

  handleDelete = (id) => {
    this.setState({
      carts: this.state.carts.filter((cart) => cart.id !== id),
    });
  };

  handleReset = () => {
    this.setState({
      carts: this.state.carts.map((cart) => {
        return {
          ...cart,
          value: 1,
        };
      }),
    });
  };

  handleIncrement = (id) => {
    this.setState({
      carts: this.state.carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            value: cart.value + 1,
          };
        }
        return cart;
      }),
    });
  };

  handleDecrement = (id) => {
    this.setState({
      carts: this.state.carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            value: cart.value - 1,
          };
        }
        return cart;
      }),
    });
  };

  getCountersWithValue = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  };
  getCartsWithValue = () => {
    return this.state.carts.filter((cart) => cart.value > 0).length;
  };
  addToCart = (info) => {
    this.setState({
      cartProducts: (this.state.carts = [...this.state.carts, info]),
    });
  };

  componentDidMount() {
    // api calls
    console.log("didmount");
  }

  render() {
    return (
      <>
        <Divider>Products</Divider>
        <div>
          <div className="container">
            <NavBar totalCount={this.getCartsWithValue()} />
            <Counters
              counters={this.state.counters}
              addToCart={this.addToCart}
            />
          </div>
        </div>

        {/* CART */}
        <Divider>Cart</Divider>

        <div className="cart">
          {/* <NavBar totalCount={this.getCartsWithValue()} /> */}
          <Carts
            carts={this.state.carts}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </div>
      </>
    );
  }
}