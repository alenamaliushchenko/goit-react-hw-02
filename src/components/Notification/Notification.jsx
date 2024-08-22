import styles from "./Notification.module.css";

export function Notification() {
    return (
        <div className={styles.notification}>
            <p>No feedback yet</p>
        </div>
    );
}