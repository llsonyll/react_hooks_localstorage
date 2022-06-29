import TaskRow from "../taskRow";

const TaskTable = ({
  task = [],
  checkTask,
  title = "Task",
  showCompleted = false,
}) => {
  const taskRowTable = (completed) => {
    return task
      .filter((t) => t.done === completed)
      .map((t) => (
        <TaskRow
          name={t.name}
          done={t.done}
          key={t.name}
          handleCheck={checkTask}
        />
      ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>{taskRowTable(showCompleted)}</tbody>
    </table>
  );
};

export default TaskTable;
