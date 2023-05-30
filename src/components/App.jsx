import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
};
  render() {
    return (
    <div>
      <Section title='Leave feedback options'>
        <FeedbackOptions onLeaveFeedback={null}/>
        </Section>
        <Section title='Statistics'>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={null} positivePercentage={null}/>
        </Section>
      
    </div>
  );
  }
  
};
