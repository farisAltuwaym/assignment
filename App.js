import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { data } from './data';
import Detail from './detail';
import List from './list'
export default function App() {
  const [showDetail, setshowDetail] = useState(false)
  const [index, setindex] = useState('')
  return (
    <SafeAreaView style={{ padding: 10, flex: 1 }} >

      {
        showDetail ? <Detail setshowDetail={setshowDetail} index={index} /> :
          <List setshowDetail={setshowDetail} setindex={setindex} />
      }
    </SafeAreaView>
  );
}

