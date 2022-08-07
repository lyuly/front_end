import { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={() => this.handleLogoutClick()}/>
    } else {
      button = <LoginIn onClick={() => this.handleLoginClick()}/>
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}

function UserGreeting(props) {
  return <h1>欢迎登录👏🏻</h1>
}

function GuestGreeting(props) {
  return <h1>已经退出</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting/>;
  }
  return <GuestGreeting />;
}

function LoginIn(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>Logout</button>
  )
}