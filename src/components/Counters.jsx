import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, counters, onReset } =
      this.props;
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10px'
      }}>
        <button onClick={onReset} className="btn btn-primary ms-4 mt-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            counter={counter}
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}
