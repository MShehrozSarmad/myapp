import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation, route }) => {
  console.log(route);
  const { id, name } = route.params;
  return (
    <View>
      <Text>HUrrah...!</Text>
      <Text>You are on profile page</Text>
      <Text>id: {id}</Text>
      <Text>name: {name}</Text>

      <Button title='go Screen' onPress={() => navigation.navigate("Silver")} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})