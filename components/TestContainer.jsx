import { useDatabase } from '@/hooks/useReadOnlyDatabase';
import { Text, View } from 'react-native';

const TestContainer = ({ tense, verb, questionCount, resetDisplay }) => {
   const { filteredData, count, randomizeQuestions } = useDatabase(tense, verb);
   return (
      <View>
         <Text>Test Container</Text>
      </View>
   );
};

export default TestContainer;
