import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const SelectionBody = () => {
   return (
      <ScrollView style={styles.container}>
         <Text style={styles.title}>Portuguese Flashcards</Text>
         <Text style={styles.subtitle}>Practice Verb Conjugation</Text>
         <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>Test your knowledge of European Portuguese verbs!</Text>
            <Text style={styles.bodyText}>
               Select up to 9 verb tenses and 15 irregular verbs / 4 examples of regular verbs.
            </Text>
            <Text style={styles.bodyText}>
               When you press START you can choose to test yourself on ALL combinations of the Verb / Tense you
               selected, or a random selection of 10, 25 or 50 questions.
            </Text>
            <Text style={[styles.bodyText, { fontStyle: 'italic' }]}>
               (Watch out, if you select &lsquo;All&lsquo; you may have a lot of questions.)
            </Text>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   container: { maxHeight: '64%', height: '64%', width: '100%', paddingHorizontal: 10 },
   title: { fontSize: 30, textAlign: 'center', fontWeight: '600', marginTop: 15, marginBottom: 10 },
   subtitle: { fontSize: 24, textAlign: 'center', fontWeight: '600', marginBottom: 10 },
   bodyContainer: { width: '100%' },
   bodyText: { fontSize: 20, marginTop: 15 },
});
