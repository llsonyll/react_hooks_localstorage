const VisibilityControl = ({
  isChecked,
  setShowCompleted,
  deleteCompleted,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete all completed task?")) {
      deleteCompleted();
    }
  };

  return (
    <div className="">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setShowCompleted(e.target.checked);
        }}
      />
      <label htmlFor=""> Show Task Completed</label>

      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};

export default VisibilityControl;
