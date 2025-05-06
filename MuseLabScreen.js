
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function MuseLabScreen({ user }) {
  const [lyrics, setLyrics] = useState('');
  const [mentor, setMentor] = useState('Kendrick Lamar');
  const [hook, setHook] = useState('');
  const [mood, setMood] = useState('');
  const [feedback, setFeedback] = useState('');
  const [history, setHistory] = useState([]);

  const generateHook = () => {
    const newHook = `Generated hook for "${lyrics}" by ${mentor}`;
    const newFeedback = `Your lyrics show great creativity with ${mentor}'s style. Keep experimenting and refining your work!`;
    setHook(newHook);
    setMood('Chill');
    setFeedback(newFeedback);
    setHistory([...history, { lyrics, hook: newHook, mood: 'Chill', feedback: newFeedback }]);
  };

  const inspireMe = () => {
    alert('Prompt: Express the feeling of freedom in your lyrics.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome, {user}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your lyrics"
        value={lyrics}
        onChangeText={setLyrics}
      />
      <Button title="Generate Hook" onPress={generateHook} />
      {hook ? <Text>🎶 Hook: {hook}</Text> : null}
      {mood ? <Text>🔥 Mood: {mood}</Text> : null}
      {feedback ? <Text>📝 Feedback: {feedback}</Text> : null}
      <Button title="Inspire Me" onPress={inspireMe} />

      <Text style={styles.subtitle}>Session History</Text>
      {history.map((session, index) => (
        <View key={index} style={styles.historyItem}>
          <Text>Lyrics: {session.lyrics}</Text>
          <Text>Hook: {session.hook}</Text>
          <Text>Mood: {session.mood}</Text>
          <Text>Feedback: {session.feedback}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 18,
  },
  historyItem: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
  },
});
