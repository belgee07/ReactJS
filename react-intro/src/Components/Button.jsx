export const Button = ({ onClick }) => {
  return (
    <div>
      <button className="add-task-button" onClick={onClick}>
        Add
      </button>
    </div>
  );
};
