import React, { Component } from "react";
import { Col, Row } from 'antd';
import { HeartTwoTone } from "@ant-design/icons";

export default class Counter extends Component {
  // getName() {
  //   return <h1>Big Name</h1>;
  // }

  // getClassName() {
  //   if (this.props.counter.value > 0) {
  //     return "badge bg-primary";
  //   }
  //   return "badge bg-warning text-dark";
  // }

  formatText() {
    if (this.props.counter.value > 0) {
      return this.props.counter.value;
    }
    return "Zero";
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }

  render() {
    const { counter, children } = this.props;
    console.log(this.props);
    return (
      <>
        <row className="m-4" >
          <Col span={6}><img src="https://www.diffusional.com.au/assets/alt_1/PB-G-CL.jpg?20211101135407" style={{
            width: '25%',
            height: '15%',
            display: 'flex',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center'
          }} ></img><h5>Amethyst 30ml<HeartTwoTone twoToneColor="#eb2f96" style={{marginLeft: '10px'}}/></h5>
       
          {children}
          
          <button
            onClick={() => this.props.onDecrement(counter.id)}
            className="btn btn-secondary ms-1"
            disabled={counter.value === 0}
          >
            -
          </button>
          <span style={{ width: '0px', height: '40px', marginLeft:'20px' }}>{this.formatText()}</span>
          <button
            onClick={() => this.props.onIncrement(counter.id)}
            className="btn btn-primary ms-4" style={{marginLeft: '0px'}}
          >
            +
          </button>
          {/* <button
            onClick={() => this.props.onDelete(counter.id)}
            className="btn btn-danger ms-1"
          >
            Delete
          </button> */}
          </Col>
        </row>
      </>
    );
  }
}
