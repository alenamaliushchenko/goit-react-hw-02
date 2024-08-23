import styles from "./Feedback.module.css";

export function Feedback({ feedback }) {
    const totalFeedback = feedback.Good + feedback.Neutral + feedback.Bad;
    const positivePercentage = totalFeedback > 0
    ? Math.round((feedback.Good / totalFeedback) * 100) 
    : 0;
    return (
        <div className={styles.feedbacks}>
            <p>Good: {feedback.Good}</p>
            <p>Neutral: {feedback.Neutral}</p>
            <p>Bad: {feedback.Bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positivePercentage}%</p>
        </div>
    );
}
