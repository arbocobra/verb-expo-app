import { StyleSheet, Text, View } from 'react-native';

const Hints = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Hints Display</Text>
      </View>
   );
};

export default Hints;

const styles = StyleSheet.create({
   container: {
      justifyContent: 'flex-end',
      padding: 10,
      // borderWidth: 1,
      // borderStyle: 'solid',
      // borderColor: 'black',
      flex: 1,
   },
   text: {
      fontSize: 18,
      fontWeight: 600,
   },
});
