import React, { Component } from "react";
import hello from  './index.module.css'

export default class Hello extends Component {

  render() {

    function getGreeting(user) {
      if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
      }
      return <h1>Hello, Stranger.</h1>
    }

    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      firstName: 'Harry',
      lastName: 'Peter'
    };

    // const name = 'Mike';
    const element = (
      <div>
        {getGreeting(user)}
        <p>Hello, {formatName(user)}</p>
      </div>
    )

    return (
      <div>
        {element}
        <p className={hello.title}>Hello, React!</p>
      </div>
    )
  }
}