import React, { Component } from "react";

import { Button, Image, Card, Row, Col, Space } from "antd";

export default class Counter extends Component {
  getName() {
    return this.props.counter.name;
  }

  render() {
    const { counter, children } = this.props;
    return (
      <>
        {children}
        <div className="m-4" >
          {
            <>
            <div style={{ display: 'inline-block', justifyContent: 'center' }}>
              <Card
                title={this.getName()}
                bordered={true}
                hoverable
                style={{
                  width: 240,
                  textAlign: "center",
                  display: "grid"
                }}
              >
                <Image width={200} src={this.props.counter.image} />
                <p></p>
                {/* <button
                  onClick={() => this.props.onDecrement(counter)}
                  className="btn btn-secondary ms-1"
                  disabled={counter.value === 0}
                >
                  -
                </button>
                <span className={this.getClassName()}>{this.formatText()}</span>
                <button
                  onClick={() => this.props.onIncrement(counter)}
                  className="btn btn-primary "
                >
                  +
                </button> */}
                <Button
                  type="primary"
                  className="ms-2"
                  onClick={() => this.props.addToCart(counter)}
                >
                  Add to Cart<i className="fa-solid fa-cart-plus ms-2"></i>
                </Button>
              </Card>
              </div>
            </>
          }
        </div>
      </>
    );
  }
}
