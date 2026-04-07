import { useCountSelectionSubmit } from '@/hooks/useSelectionSubmit';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import SelectBox from './ui/SelectBox';

const SelectCount = ({ tense, verb, display, completeSelection, displayStyle, reset }) => {
   const countOptions = [
      { id: 0, value: 'All' },
      { id: 1, value: 10 },
      { id: 2, value: 25 },
      { id: 3, value: 50 },
   ];

   const { totalCount, handleSelect } = useCountSelectionSubmit(
      display,
      tense,
      verb,
      countOptions,
      completeSelection,
      reset,
   );

   const renderItem = ({ item, index }) => (
      <SelectBox
         key={`start-${index}`}
         id={index}
         type={'start'}
         value={item.value}
         action={handleSelect}
         isChecked={false}
      />
   );

   return (
      <Animated.View style={[styles.container, displayStyle]}>
         <Text style={styles.text}>Total possible questions: {totalCount}</Text>
         <View style={styles.innerContainer}>
            <FlatList
               contentContainerStyle={{
                  height: '75%',
                  width: '100%',
               }}
               numColumns={1}
               data={countOptions}
               renderItem={renderItem}
            />
         </View>
      </Animated.View>
   );
};

const styles = StyleSheet.create({
   container: {
      width: '100%',
      paddingHorizontal: 10,
   },
   innerContainer: { height: '70%' },
   goContainer: { flex: 1, justifyContent: 'flex-end' },
   text: {
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
   },
});

export default SelectCount;
