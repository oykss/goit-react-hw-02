import css from './Options.module.css';

export default function Options({
  types,
  total,
  callback: { updateFeedback, resetFeedback },
}) {
  return (
    <ul className={css.list}>
      {types.map(type => (
        <li key={type}>
          <button
            type="button"
            onClick={() => updateFeedback(type)}
            className={css.btn}
          >
            {type}
          </button>
        </li>
      ))}
      {!total || (
        <li>
          <button
            type="button"
            onClick={() => resetFeedback()}
            className={css.btnClose}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
