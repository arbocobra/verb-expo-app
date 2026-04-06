import { verbSelectionInit } from '@/constants/options';
import { useSelectionSubmit } from '@/hooks/useSelectionSubmit';
import { FlatList, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import SelectBox from './ui/SelectBox';

const SelectVerb = ({ verb, displayStyle, applyFilter, reset, setResetVerbSelection }) => {
   const { handleCheckbox, optionList } = useSelectionSubmit(
      applyFilter,
      verb,
      verbSelectionInit,
      'verb',
      reset,
      setResetVerbSelection,
   );

   const renderItem = ({ item, index }) => (
      <SelectBox
         key={`verb-${index}`}
         id={index}
         type={'verb'}
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
            numColumns={3}
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

export default SelectVerb;
