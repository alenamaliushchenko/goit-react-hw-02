import { useState, useEffect } from "react";
import { Description } from "../Description/Description.jsx";
import { Notification } from "../Notification/Notification.jsx";
import { Options } from "../Options/Options.jsx";
import { Feedback } from "../Feedback/Feedback.jsx";
// import styles from "./App.module.css";

// export function Description() {
//     return (
//         <div className={styles.reviewsContainer}>
//            <h1>Sip Happens Café</h1>
//            <p>Please leave your feedback about our service by selecting one of the options below.</p>
//         </div>   
//     )
// }
// export function Options({ updateFeedback }) {
//     return (
//         <ul className={styles.reviewsList}>
//             <li><button onClick={() => updateFeedback('Good')}>Good</button></li>
//             <li><button onClick={() => updateFeedback('Neutral')}>Neutral</button></li>
//             <li><button onClick={() => updateFeedback('Bad')}>Bad</button></li>
//             <li><button onClick={() => updateFeedback('Reset')}>Reset</button></li>
//         </ul>
//     )
// }
// export function Feedback({ feedback }) {
//     const totalFeedback = feedback.Good + feedback.Neutral + feedback.Bad;
//     const positivePercentage = totalFeedback > 0
//     ? Math.round((feedback.Good / totalFeedback) * 100) 
//     : 0;
//     return (
//         <div className={styles.feedbacks}>
//             <p>Good: {feedback.Good}</p>
//             <p>Neutral: {feedback.Neutral}</p>
//             <p>Bad: {feedback.Bad}</p>
//             <p>Total: {totalFeedback}</p>
//             <p>Positive: {positivePercentage}%</p>
//         </div>
//     );
// }


export default function App() {
    const [feedback, setFeedback] = useState (() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { Good: 0, Neutral: 0, Bad: 0 };
    });
    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = feedbackType => {
        setFeedback (prevFeedback => ({
            ...prevFeedback,
            [feedbackType.charAt(0).toUpperCase() + feedbackType.slice(1)]: prevFeedback[feedbackType.charAt(0).toUpperCase() + feedbackType.slice(1)] + 1
        }));
    };

    const handleFeedbackSelect = (option) => {
        if (option === 'Reset') {
            setFeedback({Good: 0, Neutral: 0, Bad: 0});
        } else {
            updateFeedback(option.toLowerCase());
        };
    };    

    const totalFeedback = feedback.Good + feedback.Neutral + feedback.Bad;
    return (
        <div>
            <Description/>
            <Options updateFeedback={handleFeedbackSelect}/>
            {totalFeedback > 0 ? <Feedback feedback={feedback}/> : <Notification/>}
        </div>
    );
};



    