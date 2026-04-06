import { StyleSheet, Text, View } from 'react-native';

const Answer = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Answer Display</Text>
      </View>
   );
};

export default Answer;

const styles = StyleSheet.create({
   container: {
      padding: 10,
      border: '1px solid black',
   },
   text: {
      fontSize: 18,
      fontWeight: 600,
   },
});
