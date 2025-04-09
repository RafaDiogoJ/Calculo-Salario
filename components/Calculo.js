import { useState } from "react"
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native'


const Calculo = (props) => {
  const [salBase, setSalBase] = useState("0")
  const [horasTrab, setHorasTrab] = useState("0")
  const [difHoras, setDifHoras] = useState("0")
  const [salAMais, setSalAMais] = useState("0")

  const calcularSalario = () => {
   if(horasTrab > 160){
    difHoras = horasTrab - 160

  }
}

return(
  <View>
    <Text style={styles.titulo}>Calcular descontos</Text>
    <Image style={styles.logo} source={require('../assets/bgcalculo.jpg')} />
    <Text style={styles.texto}>Digite o valor da compra</Text>
      <TextInput
        style={styles.resposta}
        value={valorCompra}
        onChangeText={setValorCompra}
        placeholder="numero"
        keyboardType="numeric"
      />

      <Button
          title="Resultado"
          onPress={calcDesconto}
        />
     
<Text style={styles.texto2}>O valor final da compra é de: R${valorFinal}</Text>

  </View>
)
}

const styles = StyleSheet.create({
  logo: {
     height: 300,
    width: 350,
  }, titulo: {
    marginTop: 20,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3400D3'
  }, texto: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000'
  }, texto2: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 17,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold'
  }, resposta: {
    marginTop: 0,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#000'
  }
})

export default Calculo
