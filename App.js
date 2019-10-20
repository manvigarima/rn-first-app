import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] =  useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = ()  => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }
 
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"
          style={styles.input} onChangeText = {goalInputHandler} value = {enteredGoal} />
        <Button title="ADD" style={{ width: '19%', height: '100' }} onPress = {addGoalHandler} />
      </View>
      <ScrollView>{courseGoals.map((goal) => <View key = {goal} style = {styles.listItem}><Text>{goal}</Text></View>) }</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    borderColor: 'blue'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
  },
  listItem : {
    backgroundColor : '#cccfff',
    padding:10,
    marginVertical:10,
    borderColor:'#000',
    borderWidth:1,
  }
});
