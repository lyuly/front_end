import React, { Component } from "react";
import UserInfo from "./components/UserInfo";

export default class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <UserInfo user={this.props.author}/>
        <div className="Comment-text">
          {this.props.text}
        </div>
        <div className="Comment-date">
          {this.props.date}
        </div>
      </div>
    )
  }
}