import { useState, useEffect } from 'react';
import Feedback from './Feedback/Feedback'
import Options from './Options/Options'
import '../components/App.module.css'


const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = Object.values(feedback).reduce((acc, value) => acc + value, 0);

  return (
    <div className="container">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options
        feedbackTypes={Object.keys(feedback)}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 && <Feedback feedback={feedback} />}
      {totalFeedback === 0 && <p>No feedback given yet.</p>}
    </div>
  );
};
 export default App