import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: this.props.curtidas };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  }

  decrementCounter() {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Curtidas</h1>

        <p aria-live="polite">
          <h2>{this.state.currentCount}</h2>
        </p>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
          variant="contained"
        >
          <Button onClick={this.incrementCounter}>▲</Button>
          <Button onClick={this.decrementCounter}>▼</Button>
        </ButtonGroup>
      </div>
    );
  }
}
