import React, { Component } from "react";

export default class Clock extends Component {

  constructor(props) {
    super(props);
    // this.count = 0
    this.state = {
      date: new Date(),
      comment: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      comment: 1
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>{this.state.comment}</p>
      </div>
    )
  }
}