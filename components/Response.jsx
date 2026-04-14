import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Response = ({ pronoun, isImperative, submit }) => {
   const [response, setResponse] = useState('');

   const clearInput = () => {
      setResponse('');
   };

   const handleSubmit = () => {
      submit(response.toLowerCase());
      clearInput();
      Keyboard.dismiss();
   };

   if (isImperative) {
      return (
         <View style={styles.container}>
            <View style={styles.inputRow}>
               <TextInput
                  value={response}
                  onChangeText={setResponse}
                  autoCorrect={false}
                  autoComplete='off'
                  autoCapitalize='none'
                  maxLength={20}
                  style={styles.input}
                  onSubmitEditing={handleSubmit}
               />
               <Text style={styles.exlText}>!</Text>
               <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
                  <Ionicons name='arrow-forward' size={20} />
               </Pressable>
            </View>
         </View>
      );
   } else {
      return (
         <View style={styles.container}>
            <View style={styles.inputRow}>
               <Text style={styles.proText}>{pronoun}</Text>
               <TextInput
                  value={response}
                  onChangeText={setResponse}
                  autoCorrect={false}
                  autoComplete='off'
                  autoCapitalize='none'
                  maxLength={20}
                  style={styles.input}
                  onSubmitEditing={handleSubmit}
               />
               <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
                  <Ionicons name='arrow-forward' size={20} />
               </Pressable>
            </View>
         </View>
      );
   }
};

export default Response;

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      marginVertical: 20,
   },
   text: {
      fontSize: 18,
      fontWeight: 600,
   },
   proText: {
      fontSize: 22,
      fontWeight: 600,
      marginRight: 10,
   },
   exlText: {
      fontSize: 22,
      fontWeight: 600,
      margin: 5,
   },
   inputRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
   },
   input: {
      backgroundColor: '#e2e2e2',
      paddingVertical: 10,
      paddingHorizontal: 5,
      fontSize: 20,
      fontWeight: 500,
      flex: 1,
      maxWidth: 220,
      textAlign: 'center',
   },
   // buttonText: { color: 'white', fontSize: 18, fontWeight: 600 },
   buttonContainer: {
      padding: 5,
      borderRadius: 7,
      borderWidth: 1,
      borderColor: '#cbcbcb',
      backgroundColor: '#efefef',
      marginLeft: 10,
   },
});
