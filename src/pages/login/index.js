import React, { Component } from "react";
import { Button } from "antd/lib/radio";
const AppInfoParser = require('app-info-parser')
export default class test extends Component {
  state = { item: '' };

  handleChange = (event) => {
    const parser = new AppInfoParser(event.target.files[0])
    let ggg = 'asasd'
    parser.parse().then(result => {
      console.log(result)
      console.log(ggg);
    }).catch(err => {
    })
  };
  login = ()=>{
    this.props.history.push({
      pathname:'/test'
  })
  }
  render() {
    return(
    <div>
      <Button onClick={this.login}>登录</Button>
    </div>
    )
  }
}
