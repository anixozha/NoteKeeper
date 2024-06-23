import { View, Text } from 'react-native'
import React from 'react'
import Home from './home'
import { Link } from 'expo-router'

const Main = () => {
  return (
<View>
    <Link href={{pathname:'/home',params:{Name:'Anish Babu Ojha'}}}>Home</Link>
    <Link href={'/about'}>About</Link>
</View>

  )

}

export default Main