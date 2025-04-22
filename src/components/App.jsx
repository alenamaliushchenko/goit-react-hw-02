import { useState, useEffect } from 'react';
import Feedback from './Feedback/Feedback.jsx'
import Options from './Options/Options.jsx'
import Description from './Description/Description.jsx'
import Notification from './Notification/Notification.jsx'
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

  // const totalFeedback = Object.values(feedback).reduce((acc, value) => acc + value, 0);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = totalFeedback > 0 ?
    Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className="container">
      <Description/>
      <Options
        feedbackTypes={Object.keys(feedback)}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback 
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback} 
        />
        ) : (
        <Notification/>
      )}
    </div>
  );
};
 export default App