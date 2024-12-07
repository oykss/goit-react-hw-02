export default function Options({ type, handleClick }) {
  return (
    <button type="button" onClick={() => handleClick(type)}>
      {type}
    </button>
  );
}
