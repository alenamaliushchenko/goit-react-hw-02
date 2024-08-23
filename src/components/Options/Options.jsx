import styles from "./Options.module.css";

export function Options({ updateFeedback }) {
    return (
        <ul className={styles.reviewsList}>
            <li><button onClick={() => updateFeedback('Good')}>Good</button></li>
            <li><button onClick={() => updateFeedback('Neutral')}>Neutral</button></li>
            <li><button onClick={() => updateFeedback('Bad')}>Bad</button></li>
            <li><button onClick={() => updateFeedback('Reset')}>Reset</button></li>
        </ul>
    )
}