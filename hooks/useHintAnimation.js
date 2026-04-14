import { useEffect, useState } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export const useHintAnimation = (textA, textB, id) => {
   const displayHintA = useSharedValue(false);
   const displayHintB = useSharedValue(false);
   const arrowOffset = useSharedValue(10);
   const [displayText, setDisplayText] = useState('');

   const tapHintA = Gesture.Tap()
      .maxDuration(250)
      .onStart(() => {
         if (displayHintA.value) {
            displayHintA.value = false;
            setDisplayText('');
         } else {
            if (displayHintB.value) {
               displayHintB.value = false;
            }
            displayHintA.value = true;
            arrowOffset.value = withSpring(10, { duration: 300 });
            setDisplayText(textA);
         }
      });

   const tapHintB = Gesture.Tap()
      .maxDuration(250)
      .onStart(() => {
         if (displayHintB.value) {
            displayHintB.value = false;
            setDisplayText('');
         } else {
            if (displayHintA.value) {
               displayHintA.value = false;
            }
            arrowOffset.value = withSpring(80, { duration: 300 });
            displayHintB.value = true;
            setDisplayText(textB);
         }
      });

   useEffect(() => {
      displayHintA.value = false;
      displayHintB.value = false;
      arrowOffset.value = 10;
      // console.log('hint id changed ', id);
      setDisplayText('');
   }, [id]);

   // useEffect(() => {
   //    console.log('something updated ', id);
   // });

   const hintAnimatedStyle = useAnimatedStyle(() => {
      const height =
         displayHintA.value || displayHintB.value
            ? withSpring(70, { duration: 500 })
            : withSpring(0, { duration: 500 });
      const padding = displayHintA.value || displayHintB.value ? 10 : 0;
      return { height, padding };
   });
   const arrowAnimatedStyle = useAnimatedStyle(() => {
      const visibility = displayHintA.value || displayHintB.value ? 'visible' : 'hidden';
      return { transform: [{ translateX: `${arrowOffset.value}cqw` }], visibility };
   });

   return { hintAnimatedStyle, arrowAnimatedStyle, tapHintA, tapHintB, displayText };
};
