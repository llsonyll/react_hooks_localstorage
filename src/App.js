import { useEffect, useState } from "react";
import "./App.css";

import TaskCreator from "./components/taskCreator";
import TaskTable from "./components/taskTable";
import VisibilityControl from "./components/visibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const localTask = localStorage.getItem("task");
    if (localTask) setTaskItems(JSON.parse(localTask));
  }, []);

  const addTask = (task) => {
    const exist = taskItems.find((t) => t.name === task);
    if (exist) return;
    setTaskItems([...taskItems, { name: task, done: false }]);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  const handleTaskState = (name, done) => {
    const exist = taskItems.find((t) => t.name === name);
    if (!exist) return;
    setTaskItems(taskItems.map((t) => (t.name === name ? { ...t, done } : t)));
  };

  const deleteCompleted = () => {
    setTaskItems(taskItems.filter((t) => !t.done));
    setShowCompleted(false);
  };

  return (
    <div className="App">
      <TaskCreator handleTask={addTask} />
      <TaskTable
        title="Task To-Do"
        task={taskItems}
        checkTask={handleTaskState}
      />

      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        deleteCompleted={deleteCompleted}
      />

      {showCompleted && (
        <TaskTable
          title="Task Completed"
          task={taskItems}
          checkTask={handleTaskState}
          showCompleted={showCompleted}
        />
      )}
    </div>
  );
}

export default App;
