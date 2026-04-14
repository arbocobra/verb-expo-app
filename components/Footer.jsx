import { useTheme } from '@/app/ThemeContext';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from './ui/ProgressBar';

const Footer = ({ questionCount, currentCount, exitTest }) => {
   // NEXT: Add 'Are you sure you want to exit?' modal on exit button

   const { theme } = useTheme();
   return (
      <View style={[styles.container, { backgroundColor: theme.secondary }]}>
         {/* <Text style={styles.text}>Footer</Text> */}
         <Text style={styles.text}>
            {' '}
            {currentCount} / {questionCount}{' '}
         </Text>
         <ProgressBar progress={currentCount / questionCount} />
         <Pressable onPress={exitTest} style={[styles.button, { backgroundColor: theme.primary }]}>
            <Text style={styles.buttonText}>Exit</Text>
         </Pressable>
      </View>
   );
};

export default Footer;

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.4)',
   },
   text: { fontSize: 18, fontWeight: 600 },
   button: { borderRadius: 8, paddingVertical: 5, paddingHorizontal: 10 },
   buttonText: { color: 'white', fontSize: 18, fontWeight: 600 },
});
