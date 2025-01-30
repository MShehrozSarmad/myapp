import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useState} from 'react';

// import styles from './styles.js';

const App = () => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [result, setResult] = useState('');

  const handleLogin = () => {
    setResult(` your Email: ${email}, Password: ${password}`);
    setEmail('');
    setPassword('');
  };

  // const style = {
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'lightblue',
  //     gap: 7,
  //   },
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Text>hy, its me sheri</Text>
      <Text> hello world </Text>

      {result && <Text>{result}</Text>}

      <Image
        style={{width: '100%', height: 220}}
        source={{
          uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />

      <View>
        <Button title="press me"></Button>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: 'teal',
          }}
          onPress={() => Alert.alert('Ahhh...!')}>
          <Text>Touch me touch me</Text>
        </TouchableOpacity>

        <Pressable
          style={{padding: 10, backgroundColor: 'cyan'}}
          onPress={() => Alert.alert(` your current theme is "${theme}"`)}>
          <Text>what is my current theme?</Text>
        </Pressable>
      </View>

      <View style={styles.view}>
        <Text>Email: </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={txt => setEmail(txt)}
          multiline
        />

        <Text>password: </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <Button title="Login" onPress={handleLogin} />
      </View>

      <View>
        <Text numberOfLines={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eget volutpat sem. Mauris metus quam, sollicitudin vitae ipsum nec,
          vestibulum iaculis nibh. In mattis dictum augue, eu rutrum turpis
          laoreet lobortis. Donec tellus orci, blandit vitae blandit accumsan,
          efficitur eget nisl. Nulla semper, justo vel tincidunt tincidunt,
          risus nisl tempor.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    gap: 7,
  },

  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  button: {
    width: 120,
    padding: 10,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  btnText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
  },

  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },

  view: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    // borderRadius: 5,
    // backgroundColor: 'teal',
    // alignItems: 'center',
  },
});
