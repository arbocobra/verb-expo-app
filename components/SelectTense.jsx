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
            contentContainerStyle={styles.flatContainer}
            numColumns={2}
            data={optionList}
            renderItem={renderItem}
         />
      </Animated.View>
   );
};

const styles = StyleSheet.create({
   container: { width: '100%', paddingHorizontal: 10 },
   flatContainer: { width: '100%', height: '70%' },
});

export default SelectTense;
