import { Gesture } from 'react-native-gesture-handler';
import { measure, useAnimatedReaction, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

export const useHintAnimation = (id, ref, updateHintText) => {
   const displayHintA = useSharedValue(false);
   const displayHintB = useSharedValue(false);
   const arrowOffset = useSharedValue(0.1);

   const tapHintA = Gesture.Tap()
      .maxDuration(250)
      .onStart(() => {
         if (displayHintA.value) {
            displayHintA.value = false;
            scheduleOnRN(updateHintText, 0);
         } else {
            if (displayHintB.value) {
               displayHintB.value = false;
            }
            displayHintA.value = true;
            arrowOffset.value = withSpring(0.1, { duration: 300 });
            scheduleOnRN(updateHintText, 1);
         }
      });

   const tapHintB = Gesture.Tap()
      .maxDuration(250)
      .onStart(() => {
         if (displayHintB.value) {
            displayHintB.value = false;
            scheduleOnRN(updateHintText, 0);
         } else {
            if (displayHintA.value) {
               displayHintA.value = false;
            }
            displayHintB.value = true;
            arrowOffset.value = withSpring(0.8, { duration: 300 });
            scheduleOnRN(updateHintText, 2);
         }
      });

   useAnimatedReaction(
      () => id,
      () => {
         displayHintA.value = false;
         displayHintB.value = false;
      },
   );

   const hintAnimatedStyle = useAnimatedStyle(() => {
      const displayHint = displayHintA.value || displayHintB.value;
      const height = displayHint ? withSpring(70, { duration: 500 }) : withSpring(0, { duration: 500 });
      const padding = displayHint ? 10 : 0;

      return { height, padding };
   });

   const arrowAnimatedStyle = useAnimatedStyle(() => {
      const displayArrow = displayHintA.value || displayHintB.value;
      const measurements = measure(ref);
      const width = measurements ? measurements.width : 1;
      const translateX = width * arrowOffset.value;
      const opacity = displayArrow ? 1 : 0;
      return { transform: [{ translateX }], opacity };
   });

   return { hintAnimatedStyle, arrowAnimatedStyle, tapHintA, tapHintB };
};
