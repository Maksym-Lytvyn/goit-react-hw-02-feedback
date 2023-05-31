import React, { Component } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackNull } from "./FeedbackNull/FeedbackNull";



export class App extends Component {
  constructor() {
    super();
    this.state = {
    good: 0,
    neutral: 0,
    bad: 0
}
}
  

handleFeedback = option => {
  this.setState(prevState => ({
    [option]: prevState[option] + 1,
  }));
};

totalChoicesFunction() {
  return this.state.good + this.state.bad + this.state.neutral
}
positiveChoiceRatingFunction() {
  return this.state.good / this.totalChoicesFunction() * 100
}

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalChoicesFunction();
    const positivePercentage = this.positiveChoiceRatingFunction();
    return (
    <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedback}/>
        </Section>
        <Section title='Statistics'>
        {total > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>)
        : (<FeedbackNull message={'There is no feedback!'}/>) }
        
        </Section>
      
    </div>
  );
  }
  
};
