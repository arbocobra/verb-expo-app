import { StyleSheet, Text, View } from 'react-native';

const Results = ({ results, resetTest }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Results Display</Text>
         {/* <Pressable onPress={resetTest}>
            <Text>Reset</Text>
         </Pressable> */}
      </View>
   );
};

export default Results;

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
