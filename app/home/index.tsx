import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Home = () => {
    let {Name}=useLocalSearchParams()
  return (
    <View>
      <Text>Homes</Text>
      <Text>{Name}</Text>
    </View>
  )
}

export default Home