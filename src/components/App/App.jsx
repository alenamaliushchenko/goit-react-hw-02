import { useState, useEffect } from "react";
import { Description } from "../Description/Description.jsx";
import { Notification } from "../Notification/Notification.jsx";
import { Options } from "../Options/Options.jsx";
import { Feedback } from "../Feedback/Feedback.jsx";
// import styles from "./App.module.css";



export default function App() {
    const [feedback, setFeedback] = useState (() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { Good: 0, Neutral: 0, Bad: 0 };
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = feedbackType => {
        const formattedType = feedbackType.charAt(0).toUpperCase() + feedbackType.slice(1);
        setFeedback (prevFeedback => ({
            ...prevFeedback,
            [formattedType]: prevFeedback[formattedType] + 1
        }));
    };

    const handleFeedbackSelect = (option) => {
        if (option === 'Reset') {
            setFeedback({Good: 0, Neutral: 0, Bad: 0});
        } else {
            updateFeedback(option);
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



    