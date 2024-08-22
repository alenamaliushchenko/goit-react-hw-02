import styles from "./FeedbackComponents.module.css";

export function Description() {
    return (
        <div className={styles.reviewsContainer}>
           <h1>Sip Happens Café</h1>
           <p>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>   
    )
}

export function Option({ onFeedbackSelect }) {
    return (
        <ul className={styles.reviewsList}>
            <li><button onClick={() => onFeedbackSelect('Good')}>Good</button></li>
            <li><button onClick={() => onFeedbackSelect('Neutral')}>Neutral</button></li>
            <li><button onClick={() => onFeedbackSelect('Bad')}>Bad</button></li>
            <li><button onClick={() => onFeedbackSelect('Reset')}>Reset</button></li>
        </ul>
    )
}

export function Feedback({ feedback }) {
    const totalFeedback = feedback.Good + feedback.Neutral + feedback.Bad;
    const positivePercentage = totalFeedback > 0
    ? Math.round((feedback.Good / totalFeedback) * 100) 
    : 0;
    return (
        <div>
            <p>Good: {feedback.Good}</p>
            <p>Neutral: {feedback.Neutral}</p>
            <p>Bad: {feedback.Bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positivePercentage}%</p>
        </div>
    );
}