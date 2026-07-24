import '../styles/input.css';

function Input({ id, label, type, value, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
