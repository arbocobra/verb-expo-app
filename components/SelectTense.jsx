import { tenseSelectionInit } from '@/constants/options';
import { useSelectionSubmit } from '@/hooks/useSelectionSubmit';
import { FlatList, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import SelectBox from './ui/SelectBox';

const SelectTense = ({ tense, displayStyle, applyFilter }) => {
   const { handleCheckbox, optionList } = useSelectionSubmit(applyFilter, tense, tenseSelectionInit, 'tense');

   const renderItem = ({ item, index }) => (
      <SelectBox
         key={`tense-${index}`}
         id={index}
         type={'tense'}
         value={item.value}
         action={handleCheckbox}
         isChecked={item.isChecked}
      />
   );

   return (
      <Animated.View style={[styles.container, displayStyle]}>
         {/* <SelectBox id={0} type={'tense'} value={'all'} action={handleCheckbox} isChecked={true} /> */}
         <FlatList
            contentContainerStyle={{
               height: '75%',
               // paddingTop: 20,
               // paddingBottom: 20,
               width: '100%',
            }}
            numColumns={2}
            data={optionList}
            renderItem={renderItem}
            // keyExtractor={(item) => item.id}
         />
      </Animated.View>
   );
};

const styles = StyleSheet.create({
   container: {
      // padding: 10,
      width: '100%',
      paddingHorizontal: 10,
      // flex: 2,
      // flexDirection: 'row',
      // borderColor: 'blue',
      // borderWidth: 1,
      // borderStyle: 'solid',
   },
});

export default SelectTense;
