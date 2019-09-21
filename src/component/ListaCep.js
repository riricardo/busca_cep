import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import ItensCep from './ItensCep';

const url = 'https://viacep.com.br/ws/01001000/json/';

export default class ListaCep extends Component {
  constructor(props) {
    super(props);
    this.state = {listaCep: []};
  }

  async UNSAFE_componentWillMount() {
    //const lista = url.map(async urll => [await axios.get(urll)]);
    const itens1 = await axios.get(url);
    const itens2 = await axios.get(url);
    const itens3 = await axios.get(url);
    const lista = [itens1.data, itens2.data, itens3.data];
    this.setState({listaCep: lista});
    console.log(lista);
  }

  render() {
    return (
      <View>
        {this.state.listaCep.map(item => (
          <ItensCep cep={item.cep} />
        ))}
        {/* <ItensCep cep={this.state.listaCep.cep} /> */}
      </View>
    );
  }
}
