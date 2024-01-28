import styles from './Keyboard.module.css';

const KEYS: string[] = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const Keyboard = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem',
      }}
    >
      {KEYS.map((key) => {
        return (
          <button key={`letter-${key}`} className={`${styles.btn}`}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
