import { useTheme } from '@/app/ThemeContext';
import { StyleSheet, Text, View } from 'react-native';

const Footer = ({ questionCount, currentCount }) => {
   const { theme } = useTheme();
   return (
      <View style={[styles.container, { backgroundColor: theme.secondary }]}>
         {/* <Text style={styles.text}>Footer</Text> */}
         <Text style={styles.text}>
            {currentCount} / {questionCount}
         </Text>
      </View>
   );
};

export default Footer;

const styles = StyleSheet.create({
   container: {
      padding: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.2)',
   },
   text: {
      fontSize: 18,
      fontWeight: 600,
   },
});
