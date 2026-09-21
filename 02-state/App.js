import React, { Component }from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component{
  
  constructor(props){
    super(props)

    this.state = {
      nome: ''
    };

    //deixando a função acessar as propriedades
    this.entrar = this.entrar.bind(this)
  }

  entrar(){
    this.setState({
      nome: 'Victor Emanuel'
    })
  }

  render(){
    return(
      <View style={{ marginTop: 100 }}>
        <Button title="Entrar" onPress={this.entrar}/>

        <Text style={{ fontSize: 23, color: 'blue', textAlign: 'center' }}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

export default App;