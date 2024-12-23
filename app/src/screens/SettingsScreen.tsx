import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Switch, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = React.useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>General</List.Subheader>
        <List.Item
          title="Dark Mode"
          right={() => <Switch value={darkMode} onValueChange={setDarkMode} />}
        />
        <List.Item
          title="Profile"
          description="Edit your profile information"
          onPress={() => {}}
        />
        <List.Item
          title="Notifications"
          description="Manage notification settings"
          onPress={() => {}}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Business</List.Subheader>
        <List.Item
          title="Payment Methods"
          description="Manage payment methods"
          onPress={() => navigation.navigate('PaymentMethods')}
        />
        <List.Item
          title="Categories"
          description="Manage product categories"
          onPress={() => {}}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});