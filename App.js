import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Calcular from './components/Calculo'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Calcular/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
    padding: 8,
  },
});

