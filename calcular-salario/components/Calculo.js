import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';

const Salario = (props) => {
  const [salBase, setSalBase] = useState("0");
  const [horasTrabalhadas, setHorasTrabalhadas] = useState("0");
  const [salFinal, setSalFinal] = useState(null);

  const calcular = () => {
    const salarioBase = parseFloat(salBase);
    const horasTrabalhadasNumerico = parseFloat(horasTrabalhadas);

    const valHoraNormal = salarioBase / 160;
    let horasExtras = 0;
    let salarioCalculado = salarioBase;

    if (horasTrabalhadasNumerico > 160) {
      horasExtras = horasTrabalhadasNumerico - 160;
      salarioCalculado = salarioCalculado + (horasExtras * valHoraNormal) * 1.5;
    }

    setSalFinal(salarioCalculado);
  };

  return (
    <View>
      <Image style={styles.logo} source={require('../assets/imgMoeda.png')} />
      <Text style={styles.titulo}>Calcular Salário</Text>
      <Text style={styles.texto}>Digite o Salário base</Text>
      <TextInput
        style={styles.resposta}
        onChangeText={setSalBase}
        placeholder="Salário"
        keyboardType="numeric"
        value={salBase}
      />

      <Text style={styles.texto}>Digite o número de horas trabalhadas</Text>
      <TextInput
        style={styles.resposta}
        onChangeText={setHorasTrabalhadas}
        placeholder="Horas trabalhadas"
        keyboardType="numeric"
        value={horasTrabalhadas}
      />

      <Button
        title="Calcular"
        onPress={calcular}
      />

        <Text style={styles.texto2}>O salário final é R$ {salFinal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
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
  }
});

export default Salario;
