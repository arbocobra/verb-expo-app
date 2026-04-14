import { useTheme } from '@/app/ThemeContext';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from './ui/ProgressBar';

const Footer = ({ questionCount, currentCount }) => {
   const { theme } = useTheme();
   const exit = () => console.log('exit');
   return (
      <View style={[styles.container, { backgroundColor: theme.secondary }]}>
         {/* <Text style={styles.text}>Footer</Text> */}
         <Text style={styles.text}>
            {' '}
            {currentCount} / {questionCount}{' '}
         </Text>
         <ProgressBar progress={currentCount / questionCount} />
         <Pressable onPress={exit} style={styles.button}>
            <Text style={styles.text}>Exit</Text>
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
   text: {
      fontSize: 18,
      fontWeight: 600,
   },
   button: {},
});
