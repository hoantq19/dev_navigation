import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export default class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Text> Nguyen Van A </Text>
                </View>
            </SafeAreaView>
        )
    }
}
