// 创建外壳组件App
import React, { Component } from "react";
import Hello from "./components/Hello";
import Clock from "./components/Clock";
import Welcome from "./components/Welcome";
import Toggle from "./components/Toggle";
import Login from "./components/Login";
import List from "./components/List";
import Blog from "./components/Blog";
import Nameform from "./components/NameForm";
import EssayForm from "./components/EssayForm";
import FlavorForm from "./components/FlavorForm";
import Reservation from "./components/Reservation";
import Calculator from "./components/Calculator";

export default class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <Hello/>
          <Clock/>
          <Welcome name="pig"/>
          <Toggle/>
          <Login/>
          <List/>
          <Blog/>
          <Nameform/>
          <hr/>
          <EssayForm/>
          <FlavorForm/>
          <Reservation/>
          <Calculator/>
        </div>
      </React.StrictMode>
    )
  }
}