import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredGoalText) {
    setEnteredGoalText(enteredGoalText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.mainTitle}>
        <Text style={styles.titleTextColor}>Daily goals planner</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => {
          return (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.textColor}>{goal}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#0b3948',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#d0cdd7',
  },
  textInput: {
    backgroundColor: '#acb0bd',
    width: '70%',
    marginRight: 10,
    padding: 16,
    color: '#416165',
    fontSize: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    backgroundColor: '#acb0bd',
    padding: 14,
  },
  textColor: {
    color: '#416165',
    fontSize: 18,
  },
  mainTitle: { margin: 8, marginTop: 24 },
  titleTextColor: { color: '#eebaad', fontSize: 32 },
});
