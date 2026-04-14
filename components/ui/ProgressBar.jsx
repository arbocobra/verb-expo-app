import { useTheme } from '@/app/ThemeContext';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

export const ProgressBar = ({ progress }) => {
   const { theme } = useTheme();
   const completeWidth = useAnimatedStyle(() => {
      const percent = Math.round(progress * 100);
      return { width: `${percent}%` };
   });
   const incompleteWidth = useAnimatedStyle(() => {
      const percent = 100 - Math.round(progress * 100);
      return { width: `${percent}%` };
   });
   return (
      <View style={styles.container}>
         <Animated.View style={[completeWidth, styles.complete, { backgroundColor: theme.primary }]} />
         <Animated.View style={[incompleteWidth, styles.incomplete]} />
      </View>
   );
};

const styles = StyleSheet.create({
   container: { flexDirection: 'row', flex: 1, height: 4, backgroundColor: '#e2e2e2', marginHorizontal: 15 },
   complete: { height: 4 },
   incomplete: { height: 4, backgroundColor: 'white' },
});
