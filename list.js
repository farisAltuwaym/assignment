import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { data } from './data';

export default function App({ setshowDetail, setindex }) {
  return (
    <SafeAreaView style={{ padding: 10, flex: 1 }} >
      <ScrollView>

        <View style={{ alignItems: 'center', }}>
          {
            data.map((item, i) => {


              return <TouchableOpacity onPress={() => { setshowDetail(true); setindex(i) }} style={{ width: '80%', height: 200, marginVertical: 10 }}><Image style={{ width: '100%', height:200,borderRadius:5, }} source={item.image} /></TouchableOpacity>

            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

