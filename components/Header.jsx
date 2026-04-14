import { useTheme } from '@/app/ThemeContext';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
   const { theme } = useTheme();
   return (
      <View style={[styles.container, { backgroundColor: theme.secondary }]}>
         <Text style={styles.text}>Header</Text>
      </View>
   );
};

export default Header;

const styles = StyleSheet.create({
   container: {
      padding: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.4)',
   },
   text: {
      fontSize: 18,
      fontWeight: 600,
   },
});
