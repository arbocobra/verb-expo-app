import { tenseSelection } from '@/constants/options';
import { useRef, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SelectBox from './ui/SelectBox';

const SelectTense = ({ tense, submitSelection, display }) => {
   const [isAllTense, setIsAllTense] = useState(true);
   const tenseCheckboxRef = useRef(null);
   // const tenseSelection = [
   //    'present',
   //    'past',
   //    'present continuous',
   //    'past continuous',
   //    'present perfect',
   //    'past perfect',
   //    'future perfect',
   //    'imperfect',
   //    'imperative',
   // ];

   const handleCheckbox = (v, t) => console.log(v, t);

   const renderItem = ({ item, index }) => (
      <SelectBox id={index} type={'tense'} value={item.value} action={handleCheckbox} isChecked={false} />
   );

   if (display)
      return (
         <View style={styles.container}>
            <SelectBox id={0} type={'tense'} value={'all'} action={handleCheckbox} isChecked={true} />
            <FlatList data={tenseSelection} renderItem={renderItem} keyExtractor={(item) => item.id} />
         </View>
      );
};

const styles = StyleSheet.create({
   container: { width: '100%', flexDirection: 'row wrap', flex: 2 },
});

export default SelectTense;
