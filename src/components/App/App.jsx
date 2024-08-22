import { useState, useEffect } from "react";
import { Description, Option, Feedback } from "../Feedback/FeedbackComponents";
import { Notification } from "../Notification/Notification";


export default function App() {
    const [feedback, setFeedback] = useState (() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { Good: 0, Neutral: 0, Bad: 0 };
    });
    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));}, [feedback]);
    
    const handleFedbackSelect = (option) => {
        if (option === 'Reset') {
            setFeedback({Good: 0, Neutral: 0, Bad: 0});
        } else {
            setFeedback (prevFeedback => ({
                ...prevFeedback,
                [option]: prevFeedback[option] + 1
            }));
        }
    };    

    const totalFeedback = feedback.Good + feedback.Neutral + feedback.Bad;
    return (
        <div>
            <Description/>
            <Option onFeedbackSelect={handleFedbackSelect}/>
            {totalFeedback > 0 ? <Feedback feedback={feedback}/> : <Notification/>}
        </div>
    );
}



    