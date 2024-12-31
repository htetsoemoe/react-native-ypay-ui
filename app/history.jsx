import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Transactions from './components/Transactions'

export default function history() {
  return (
    <View style={{ padding: 20 }}>
      <Transactions />
    </View>
  )
}

const styles = StyleSheet.create({})