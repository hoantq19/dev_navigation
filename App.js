import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput, Dimensions } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class App extends Component {
  render() {
    return (
      // <Appnavigator />
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {/* <Input style={{ width: 150, height: 35 }} /> */}
            <TextInput style={{ width: width - 50, height: 35, borderWidth: 0.5, marginBottom: 10 }}
              placeholder='Username' />
            <TextInput style={{ width: width - 50, height: 35, borderWidth: 0.5 }}
              placeholder='Password' />
            <TouchableOpacity style={{ marginTop: 16, alignItems: 'center' }} onPress={() => { }} >
              <View style={{ width: 160, height: 35, borderWidth: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: '#fff' }}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', borderTopWidth: 0.5, height: 50, width: 380, alignItems: 'center', justifyContent: 'space-around' }} >
            <Image source={{ uri: '' }} style={{ width: 50, height: 40, backgroundColor: '#fff' }} />
            <Image source={{ uri: '' }} style={{ width: 50, height: 35, backgroundColor: '#fff' }} />
            <Image source={{ uri: '' }} style={{ width: 50, height: 35, backgroundColor: '#fff' }} />
            <Image source={{ uri: '' }} style={{ width: 50, height: 35, backgroundColor: '#fff' }} />
          </View>
        </View >
      </SafeAreaView >
    )
  }
}
