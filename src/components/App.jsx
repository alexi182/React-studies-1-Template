import React, { Component } from 'react';
import Block from './Block';

export default class Main extends React.Component {
   render() {
      return (
          <div className="container">
             <div className="row">
                <div className="col-md-6">
                   <h1 className="title">Hello people</h1>
                </div>
                <div className="col-md-6">
                   <h2>Info</h2>
                </div>
             </div>
             <Block />
          </div>
      )
   }
}