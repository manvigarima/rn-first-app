import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style = {{padding:30, borderColor:'blue', flexDirection:'row', height:300}}>
      <View style = {{
          backgroundColor:'red',
          flex:1,
        }}>
         <Text>1</Text> 
      </View>
      <View style = {{
         backgroundColor:'green',
        flex:1,
      }}>
        <Text>2</Text>
      </View>
      <View style = {{
         backgroundColor:'yellow',
         flex:2,
      }}>
        <Text>3</Text>
      </View>
        
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
