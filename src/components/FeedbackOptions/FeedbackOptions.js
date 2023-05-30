import React from 'react';
import Statistics from 'components/Statistics/Statistics';

const options = ['good', 'neutral', 'bad']   
const FeedbackOptions = ({onLeaveFeedback}) => {
 
console.log(options);
// goodChoiceCounterFunction() {
//     this.setState(prevState => ({good: prevState.good + 1}));
    
// }
// badChoiceCounterFunction() {
//     this.setState({bad: this.state.bad + 1});
//     console.log('BAD CHOICE');
// }
// neutralChoiceCounterFunction() {
//     this.setState({neutral: this.state.neutral + 1});
//     console.log('NEUTRAL CHOICE');

// }



    return (
        <div> {options.map(button => <button key={button} onClick={null}>{button}</button>) }</div>
);
}

export default FeedbackOptions;