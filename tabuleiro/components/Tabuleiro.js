import { Text, View, StyleSheet, Image } from 'react-native';

export default function Tabuleiro() {
  return (
    <View style={styles.container}>
      <View style={styles.colunas}>
        <View style={styles.preto}></View>
        <View style={styles.branco}></View>
        <View style={styles.preto}></View>
        <View style={styles.branco}></View>
      </View>

      <View style={styles.colunas}>
        <View style={styles.branco}></View>
        <View style={styles.preto}></View>
        <View style={styles.branco}></View>
        <View style={styles.preto}></View>
      </View>

      <View style={styles.colunas}>
        <View style={styles.preto}></View>
        <View style={styles.branco}></View>
        <View style={styles.preto}></View>
        <View style={styles.branco}></View>
      </View>

      <View style={styles.colunas}>
        <View style={styles.branco}></View>
        <View style={styles.preto}></View>
        <View style={styles.branco}></View>
        <View style={styles.preto}></View>
      </View>
    </View>  


  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    width:335,
    height:335,
  },
  preto:{
    backgroundColor:'black',
    height:'25%',
    width:'100%'
  },
  branco:{
    backgroundColor:'white',
    height:'25%',
    width:'100%'
  },
  colunas:{
    flexDirection:'column',
    width:'25%',
    height:'100%',
    backgroundColor:'green'
  },
});

//pronto
