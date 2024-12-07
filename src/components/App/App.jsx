import { useState, useEffect } from 'react';

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = type =>
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });

  const resetFeedback = () => setFeedback({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {}, [feedback]);
  return (
    <>
      <Description
        name="Sip Happens Café"
        desc="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        types={Object.keys(feedback)}
        callback={{ updateFeedback, resetFeedback }}
        total={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          {...feedback}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
