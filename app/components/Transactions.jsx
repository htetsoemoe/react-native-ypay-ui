import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function Transactions() {
  const [transaction, setTransaction] = useState([
    { id: 1, msg: "EPC Bill", type: "out", time: "Dec 31, 2024" },
    { id: 2, msg: "Deposit", type: "in", time: "Dec 31, 2024" },
    { id: 3, msg: "Transfer", type: "in", time: "Dec 31, 2024" },
    { id: 4, msg: "Wifi Bill", type: "out", time: "Dec 29, 2024" },
    { id: 5, msg: "Payment", type: "in", time: "Dec 28, 2024" },
  ])

  return (
    <ScrollView scrollEnabled={true}>
      {transaction.map(transaction => {
        return (
          <View
            style={styles.transaction}
            key={transaction.id}
          >
            <MaterialIcons
              name='compare-arrows'
              size={32}
              color={
                transaction.type === "in" ? "green" : "brown"
              }
            />
            <View>
              <Text style={styles.text.payment}>
                {transaction.msg}
              </Text>
              <Text style={styles.text.muted}>
                {transaction.time}
              </Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  transaction: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    payment: {
      fontSize: 21,
    },
    muted: {
      color: "#888",
    }
  }
})