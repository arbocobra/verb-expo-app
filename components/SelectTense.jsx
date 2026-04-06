import { tenseSelectionInit } from '@/constants/options';
import { useSelectionSubmit } from '@/hooks/useSelectionSubmit';
import { FlatList, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import SelectBox from './ui/SelectBox';

const SelectTense = ({ tense, displayStyle, applyFilter, reset, setResetTenseSelection }) => {
   const { handleCheckbox, optionList } = useSelectionSubmit(
      applyFilter,
      tense,
      tenseSelectionInit,
      'tense',
      reset,
      setResetTenseSelection,
   );

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
         <FlatList
            contentContainerStyle={{
               height: '75%',
               width: '100%',
            }}
            numColumns={2}
            data={optionList}
            renderItem={renderItem}
         />
      </Animated.View>
   );
};

const styles = StyleSheet.create({
   container: {
      width: '100%',
      paddingHorizontal: 10,
   },
});

export default SelectTense;
