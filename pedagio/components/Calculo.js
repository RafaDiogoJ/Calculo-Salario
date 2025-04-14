import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import {Picker} from 'react-native';

const Valor = (props) => {
  const [tipoCarro, setTipoCarro] = useState(null);
  const [kmPercorrido, setKmPercorrido] = useState(null);
  const [valorPagar, setValorPagar] = useState(null)

  let valor = 0;

  const calcular = () => {
    const kmPercorridoNumerico = parseFloat(kmPercorrido);

    if (tipoCarro === 'carro') {
      valor = kmPercorridoNumerico * 0.1;
    } else if (tipoCarro === 'moto') {
      valor = kmPercorridoNumerico * 0.05;
    } else if (tipoCarro === 'caminhao') {
      valor = kmPercorridoNumerico * 0.15;
    }
    setValorPagar(valor)
  };

  return (
    <View>
      <Image style={styles.logo} source={require('../assets/pedagio.jpeg')} />
      <Text style={styles.titulo}>Calcular valor pedágio</Text>
      <Text style={styles.texto}>Digite a quantidade de KM percorridos</Text>
      <TextInput
        style={styles.resposta}
        onChangeText={setKmPercorrido}
        placeholder="Km"
        keyboardType="numeric"
        value={kmPercorrido}
      />

      <Text style={styles.texto}>Digite o tipo de veículo</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={tipoCarro}
          onValueChange={(itemValue) => setTipoCarro(itemValue)}>
          <Picker.Item label="Carro" value="carro" />
          <Picker.Item label="Moto" value="moto" />
          <Picker.Item label="Caminhão" value="caminhao" />
        </Picker>
      </View>

      <Button title="Calcular" onPress={calcular} />

      <Text style={styles.texto2}>O valor final é de R$ {valorPagar}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
    alignContent:'center'
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
