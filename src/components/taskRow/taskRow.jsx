const TaskRow = ({ name, done, handleCheck }) => {
  return (
    <tr>
      <td>
        {name}
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => {
            // e.target.checked
            handleCheck(name, e.target.checked);
          }}
        />
      </td>
    </tr>
  );
};

export default TaskRow;
