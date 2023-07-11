import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onIncrement, onDecrease, onDelete, onReset, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrease={onDecrease}
            onDelete={onDelete} //paso referencia del handler para el evento
          />
        ))}
      </div>
    );
  }
}

export default Counters;
