import { useTheme } from '@/app/ThemeContext';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const SelectBox = ({ id, type, value, action, isChecked }) => {
   const { theme } = useTheme();

   const conditionalStyles = {
      defaultBg:
         type === 'tense'
            ? theme.primaryExtraLight
            : type === 'verb'
              ? theme.secondaryExtraLight
              : theme.tertiaryExtraLight,

      darkBg: type === 'tense' ? theme.primaryDark : type === 'verb' ? theme.secondaryDark : theme.tertiaryDark,

      border: type === 'tense' ? theme.primaryLight : type === 'verb' ? theme.secondaryLight : theme.tertiaryLight,
      spacing: type === 'verb' ? 5 : 10,
      buttonHeight: type === 'verb' ? 50 : 60,
      label: isChecked ? '#fff' : '#222',
   };

   const handleSelect = () => {
      action(id);
   };

   return (
      <View style={[styles.container, { padding: conditionalStyles.spacing }]}>
         <Pressable
            disabled={false}
            onPress={handleSelect}
            style={({ pressed }) => [
               {
                  backgroundColor: pressed || isChecked ? conditionalStyles.darkBg : conditionalStyles.defaultBg,
                  borderColor: conditionalStyles.border,
                  paddingHorizontal: conditionalStyles.spacing,
                  height: conditionalStyles.buttonHeight,
               },
               styles.button,
            ]}
         >
            <Text style={[{ color: conditionalStyles.label }, styles.label]}>{value}</Text>
         </Pressable>
      </View>
   );
};

const styles = StyleSheet.create({
   container: { flex: 1 },
   button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      borderWidth: 2,
      borderStyle: 'solid',
      // height: 50,
   },
   checkbox: {},
   textContainer: {},
   label: { fontSize: 18, fontWeight: '500', textAlign: 'center', textTransform: 'capitalize', lineHeight: 22 },
});

export default SelectBox;
