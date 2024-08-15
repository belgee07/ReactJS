export const Input = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
