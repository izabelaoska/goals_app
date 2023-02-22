import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import styles from './MainPage.style';

export default function MainPage() {
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
