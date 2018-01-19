import React, { Component } from 'react';
import {Block} from '../components/Block';

const allData = {
   age: 28,
   sex: 'man'
};

export default class App extends React.Component {
   constructor(props) {
      super(props);

      this.name = "Alex";
   }

   render() {
      return (
          <div className="container">
             <Block data={this.name} data2={allData} />
          </div>
      )
   }
}

