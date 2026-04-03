// import { useEffect, useState } from 'react';

// export const useSelectionDisplay = (updateDisplay) => {
//    const [displayTense, setDisplayTense] = useState(false);
//    const [displayVerb, setDisplayVerb] = useState(false);
//    const [submitState, setSubmitState] = useState(0);

//    const submitSelection = () => {
//       setSubmitState(1);
//    };

//    const updateSelection = (view) => {
//       if (view === 'tense') setDisplayTense((current) => !current);
//       else if (view === 'verb') setDisplayVerb((current) => !current);
//    };

// useEffect(() => {
//    if (submitState === 1) {
//       setTimeout(() => {
//          setSubmitState(2);
//       }, 800);
//    } else if (submitState === 2) {
//       setTimeout(() => {
//          updateDisplay();
//       }, 500);
//    }
// }, [submitState]);

//    useEffect(() => {
//       if (displayTense) setDisplayVerb(false);
//    }, [displayTense]);

//    useEffect(() => {
//       if (displayVerb) setDisplayTense(false);
//    }, [displayVerb]);

//    return { displayTense, displayVerb, submitState, submitSelection, updateSelection };
// };
