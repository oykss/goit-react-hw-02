import css from './Options.module.css';

export default function Options({ types, total, update, reset }) {
  return (
    <ul className={css.list}>
      {types.map(type => (
        <li key={type}>
          <button
            type="button"
            onClick={() => update(type)}
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
            onClick={() => reset()}
            className={css.btnClose}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
