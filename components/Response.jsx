import { Pressable, StyleSheet, Text, View } from 'react-native';

const Response = ({ handleResponse, reset }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Response Box</Text>
         <View style={styles.buttonContainer}>
            <Pressable
               onPress={() => handleResponse(true, 'hello')}
               style={[styles.container, { backgroundColor: 'green' }]}
            >
               <Text style={styles.buttonText}>Right</Text>
            </Pressable>
            <Pressable
               onPress={() => handleResponse(false, 'goodbye')}
               style={[styles.container, { backgroundColor: 'red' }]}
            >
               <Text style={styles.buttonText}>Wrong</Text>
            </Pressable>
         </View>
         <Pressable onPress={reset} style={[styles.container, { backgroundColor: 'blue' }]}>
            <Text style={styles.buttonText}>Reset</Text>
         </Pressable>
      </View>
   );
};

export default Response;

const styles = StyleSheet.create({
   container: {
      padding: 20,
   },
   text: {
      fontSize: 18,
      fontWeight: 600,
   },
   buttonText: { color: 'white', fontSize: 18, fontWeight: 600 },
   buttonContainer: {
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
});
