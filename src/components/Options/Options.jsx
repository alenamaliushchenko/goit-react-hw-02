import css from './Options.module.css';

const Options = ({ feedbackTypes, updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      {feedbackTypes.map(type => (
        <button key={type} className={css.button} onClick={() => updateFeedback(type)}>
          {type}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={css.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
