export default function Options({
  types,
  callback: { updateFeedback, resetFeedback },
  total,
}) {
  return (
    <ul>
      {types.map(type => (
        <li key={type}>
          <button type="button" onClick={() => updateFeedback(type)}>
            {type}
          </button>
        </li>
      ))}
      {!total || (
        <li>
          <button type="button" onClick={() => resetFeedback()}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
