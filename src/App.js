// useState: mudar e ver estado das variaveis
// useEffect:
import React, {Component, useState, useEffect} from 'react';
import {ScrollView, TextInput, View, Text} from 'react-native';
import ListaCep from './component/ListaCep';
import axios from 'axios'; //Utilizado para fazer as consultas na internet

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor');
//   }

//   UNSAFE_componentWillMount() {
//     console.log('componentWillMount');
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   render() {
//     console.log('render');
//     // const [value, onChangeText] = React.useState('Useless Placeholder');
//     return (
//       <ScrollView>
//         {/* <View>
//           <TextInput
//             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//             onChangeText={text => onChangeText(text)}
//             value={value}
//           />
//         </View> */}
//         <ListaCep />
//       </ScrollView>
//     );
//   }
// }

const App = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});
  const [erro, setError] = useState('');

  useEffect(() => {
    if (cep.length === 8) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      axios
        .get(url)
        .then(response => {
          if (response.data && response.status === 200) {
            setEndereco(response.data);
          }
        })
        .catch(e => {
          setError('Endereço não existe');
        });
    }
  }, [cep]);

  const onChangeTextHandler = texto => {
    const regex = /^[0-9\b]+$/;
    if (regex.test(texto) || texto === '') {
      setCep(texto);
    }
  };

  const exibirEndereco = () => {
    if (endereco && endereco.logradouro) {
      console.log('certo');
      return (
        <View>
          <Text>{endereco.logradouro}</Text>
        </View>
      );
    } else if (erro) {
      console.log('erro');
      return (
        <View>
          <Text>{erro}</Text>
        </View>
      );
    } else if (endereco.erro) {
      console.log('erro find');
      return (
        <View>
          <Text>Endereço não encontrado</Text>
        </View>
      );
    }
  };

  return (
    <ScrollView>
      {/* <View>
           <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             onChangeText={text => onChangeText(text)}
             value={value}
           />
         </View> */}
      {/* <ListaCep /> */}
      <View>
        <Text>Digite seu CEP</Text>
        <TextInput
          value={cep}
          keyboardType="numeric"
          maxLength={8}
          onChangeText={texto => onChangeTextHandler(texto)}
        />
        {exibirEndereco()}
      </View>
    </ScrollView>
  );
};

export default App;
