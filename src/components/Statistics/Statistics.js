import React from 'react';

const Statistics = ({stats}) => {
    console.log({stats});    
    return (
                        <ul>
                            <li>Good: {stats.good}</li>
                            <li>Neutral: {stats.neutral}</li>
                            <li>Bad: {stats.bad}</li>
                            <li>Total: </li>
                            <li>Positive feedback: ТУТ МОЖЕ БУТИ ВАША ФУНКЦІЯ</li>
                        </ul>
                );
    }

 

export default Statistics;