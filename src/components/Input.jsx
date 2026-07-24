import '../styles/input.css';

function Input({ id, label, type }) {
  return (
    <div className="input-group">
      <label for={id}>{label}</label>
      <input
        id={id}
        type={type}
      ></input>
    </div>
  );
}

export default Input;
