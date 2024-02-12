import { StyleSheet, View } from 'react-native';

import Home from './components/Home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E4187',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55
  },
});
