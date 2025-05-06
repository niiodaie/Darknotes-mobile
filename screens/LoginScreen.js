
// LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ onLogin }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Please login</Text>
      <Button title="Login as test user" onPress={() => onLogin('testuser@example.com')} />
    </View>
  );
}
