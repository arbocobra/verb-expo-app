import { StyleSheet, Text, View } from 'react-native';

export const QuestionDetails = ({ value, iconName, isTrue, colorFg, colorBg }) => {
   const foregroundColor = isTrue ? 'white' : '#a4a4a4';
   const backgroundColor = isTrue ? colorBg : '#e2e2e2';

   return (
      <View style={[styles.infoBox, { backgroundColor }]}>
         {/* <FontAwesome6 name={iconName} size={16} color={foregroundColor} /> */}
         <Text style={[styles.infoText, { color: foregroundColor }]}>{value}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   infoBox: {
      flexDirection: 'row',
      borderRadius: 3,
      paddingVertical: 4,
      paddingHorizontal: 5,
      alignItems: 'center',
      // marginBottom: 5,
      // height: 20,
      // flex: 1,
   },
   infoText: {
      fontSize: 13,
      lineHeight: 13,
      fontWeight: 500,
      // marginLeft: 5,
      textTransform: 'uppercase',
   },
});
