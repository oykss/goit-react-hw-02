import css from './Description.module.css';

export default function Description({ name, desc }) {
  return (
    <>
      <h1 className={css.name}>{name}</h1>
      <p className={css.desc}>{desc}</p>
    </>
  );
}
