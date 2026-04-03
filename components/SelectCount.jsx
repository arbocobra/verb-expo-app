import { useDatabase } from '@/hooks/useReadOnlyDatabase';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import SelectBox from './ui/SelectBox';

const SelectCount = ({ verb, tense, displayStyle, completeSelection }) => {
   const { filteredData, count, randomizeQuestions } = useDatabase(tense, verb);

   const countOptions = [
      { id: 0, value: 'All', isChecked: true },
      { id: 1, value: 10, isChecked: false },
      { id: 2, value: 25, isChecked: false },
      { id: 3, value: 50, isChecked: false },
   ];

   const handleTest = () => {
      completeSelection();
   };

   const handleSelect = (id) => (id === 0 ? randomizeQuestions() : randomizeQuestions(countOptions[id].value));

   const renderItem = ({ item, index }) => (
      <SelectBox
         key={`start-${index}`}
         id={index}
         type={'start'}
         value={item.value}
         action={handleSelect}
         isChecked={item.isChecked}
      />
   );

   return (
      <Animated.View style={[styles.container, displayStyle]}>
         <Text>Set test length:</Text>

         <Text>Total possible questions: {count}</Text>
         <Pressable onPress={handleTest} style={{ padding: 10, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>BUtton</Text>
         </Pressable>
         {/* <FlatList
            contentContainerStyle={{
               height: '75%',
               width: '100%',
            }}
            numColumns={3}
            data={optionList}
            renderItem={renderItem}
         /> */}
      </Animated.View>
   );
};

const styles = StyleSheet.create({
   container: {
      width: '100%',
      paddingHorizontal: 10,
   },
});

export default SelectCount;
