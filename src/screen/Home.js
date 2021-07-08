import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text> Name Space </Text>
        </View>
      </SafeAreaView>
    )
  }
}
