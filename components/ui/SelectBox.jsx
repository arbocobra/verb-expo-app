import { useTheme } from '@/app/ThemeContext';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SelectBox = ({ type, value, action, isChecked }) => {
   const { theme } = useTheme();

   const elementStyles = {
      tenseButton: [
         styles.button,
         {
            backgroundColor: isChecked ? theme.secondaryDark : theme.secondaryLight,
            borderColor: theme.secondaryExtraLight,
         },
      ],
      verbButton: [
         styles.button,
         {
            backgroundColor: isChecked ? theme.primaryDark : theme.primaryLight,
            borderColor: theme.primaryExtraLight,
         },
      ],
      label: [
         styles.label,
         {
            color: type === 'verb' ? '#fff' : isChecked ? '#fff' : '#222',
         },
      ],
   };

   const handleSelect = () => {
      action(value, type);
   };

   return (
      <TouchableOpacity onPress={handleSelect}>
         <View style={type === 'tense' ? elementStyles.tenseButton : elementStyles.verbButton}>
            <Text style={elementStyles.label}>{value}</Text>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 2,
      borderStyle: 'solid',
   },
   checkbox: {},
   textContainer: {},
   label: { fontSize: 16, fontWeight: '500' },
});

export default SelectBox;
