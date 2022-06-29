import { useState } from "react";

const TaskCreator = ({ handleTask }) => {
  const [input, setInput] = useState("");
  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.set("task", input);
    if (input.length > 0) {
      handleTask(input);
      setInput("");
    }
  };

  return (
    <div className="taskCreator">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter a new task"
          onChange={handleInput}
        />
        <button type="submit"> Save Task</button>
      </form>
    </div>
  );
};

export default TaskCreator;
