import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
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
});
