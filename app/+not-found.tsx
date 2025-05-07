import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View>
      <Text style={{color: "white"}}>Not found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
