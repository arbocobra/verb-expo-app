import { useDatabase } from '@/hooks/useReadOnlyDatabase';
import { useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import SelectBox from './ui/SelectBox';

const SelectCount = ({ verb, tense, display, completeSelection, displayStyle, reset }) => {
   const { totalCount, filteredData, fetchData } = useDatabase(reset);

   useEffect(() => {
      if (display) fetchData(tense, verb);
   }, [display]);

   const countOptions = [
      { id: 0, value: 'All', isChecked: true },
      { id: 1, value: 10, isChecked: false },
      { id: 2, value: 25, isChecked: false },
      { id: 3, value: 50, isChecked: false },
   ];

   const handleTest = () => {
      completeSelection(filteredData, 10);
   };

   const renderItem = ({ item, index }) => (
      <SelectBox
         key={`start-${index}`}
         id={index}
         type={'start'}
         value={item.value}
         action={handleTest}
         isChecked={item.isChecked}
      />
   );

   return (
      <Animated.View style={[styles.container, displayStyle]}>
         <Text>Set test length:</Text>

         <Text>Total possible questions: {totalCount}</Text>
         <Pressable onPress={handleTest} style={{ padding: 10, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Button</Text>
         </Pressable>
         {/* <FlatList
            contentContainerStyle={{
               height: '75%',
               width: '100%',
            }}
            numColumns={2}
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
