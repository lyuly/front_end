import React, { Component } from "react";

export default class Avatar extends Component {
  render() {
    return (
      <img className="Avatar" src={this.props.author.avatarUrl} alt={this.props.author.name}/>
    )
  }
}