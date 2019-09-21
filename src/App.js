import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import ListaCep from './component/ListaCep';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <ScrollView>
        <ListaCep />
      </ScrollView>
    );
  }
}
