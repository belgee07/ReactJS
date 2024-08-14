export const Input = ({ placeholder, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  );
};
