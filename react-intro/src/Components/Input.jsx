export const Input = ({ placeholder, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
