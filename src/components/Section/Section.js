import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';



const Section = ({title, children}) => {

        return (
                <section>
                    <h2>{title}</h2>
                    <div>{children}</div>
                </section>
            );
        }


export default Section;