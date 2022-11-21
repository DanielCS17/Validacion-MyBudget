
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header></Header>
      </View>
      <View style={styles.body}>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 1
  },

  body: {
    flex: 1
  }
});
