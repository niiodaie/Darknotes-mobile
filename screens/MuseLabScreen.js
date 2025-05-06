
// MuseLabScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function MuseLabScreen({ user }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to MuseLab, {user}!</Text>
    </View>
  );
}
