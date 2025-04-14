import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import { Picker } from 'react-native'


const Valor = (props) => {
  const [consumo, setConsumo] = useState(null);
  const [bandeira, setBandeira] = useState(null);
  const [valorPagar, setValorPagar] = useState(null)

  let valor = 0;

  const calcular = () => {
    const consumoNumerico = parseFloat(consumo);

    if (bandeira === 'verde') {
      valor = consumoNumerico * 0.50;
    } else if (bandeira === 'amarela') {
      valor = consumoNumerico * 0.55;
    } else if (bandeira === 'vermelha 1') {
      valor = consumoNumerico * 0.60;
    } else if (bandeira === 'vermelha 2'){
      valor = consumoNumerico * 0.70
    }
    setValorPagar(valor)
  };

  return (
    <View>
      <Image style={styles.logo} source={require('../assets/contaLuz.jpg')} />
      <Text style={styles.titulo}>Calcular valor da conta</Text>
      <Text style={styles.texto}>Digite o consumo em kWh</Text>
      <TextInput
        style={styles.resposta}
        onChangeText={setConsumo}
        placeholder="kWh"
        keyboardType="numeric"
        value={consumo}
      />

      <Text style={styles.texto}>Selecione a cor da bandeira</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={bandeira}
          onValueChange={(itemValue) => setBandeira(itemValue)}>
          <Picker.Item label="Verde" value="verde" />
          <Picker.Item label="Amarela" value="amarela" />
          <Picker.Item label="Vermelha 1" value="vermelha 1" />
          <Picker.Item label="Vermelha 2" value="vermelha 2" />
        </Picker>
      </View>

      <Button title="Calcular" onPress={calcular} />

      <Text style={styles.texto2}>O valor da conta é de R$ {valorPagar}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
    alignContent:'center',
  },
  titulo: {
    marginTop: 20,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF8C00',
  },
  texto: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 17,
    textAlign: 'center',
    color: '#000',
  },
  texto2: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 17,
    textAlign: 'center',
    color: '#FF8C00',
    fontWeight: 'bold',
  },
  resposta: {
    marginTop: 0,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
  },
  pickerContainer: {
    marginHorizontal: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 20,
  },
});

export default Valor;
