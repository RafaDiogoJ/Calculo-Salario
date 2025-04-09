import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Calculo from './components/Calculo'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Calculo/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7B60A',
    padding: 8,
  }
});

