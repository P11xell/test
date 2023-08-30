 'use client';
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");

  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "active") {
      return !task.completed;
    } else {
      return true;
    }
  });
  const handleAddTask = () => {
    if (currentTask.trim() !== "") {
      setTasks([...tasks, { text: currentTask, completed: false }]);
      setCurrentTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditingTaskIndex(index);
    setEditingTaskText(tasks[index].text);
  };

  const handleUpdateTask = () => {
    if (editingTaskIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editingTaskIndex ? { ...task, text: editingTaskText } : task
      );
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
      setEditingTaskText("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (editingTaskIndex !== null) {
        handleUpdateTask();
      } else {
        handleAddTask();
      }
    }
  };

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <Input
          label="Task"
          placeholder="Coloque sua task aqui"
          className="w-full"
          value={editingTaskIndex !== null ? editingTaskText : currentTask}
          onChange={(e) =>
            editingTaskIndex !== null
              ? setEditingTaskText(e.target.value)
              : setCurrentTask(e.target.value)
          }
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="mt-5 px-6">
      <div className="mb-3 flex justify-center gap-3">
          <Button
            size="sm"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-gray-500" : ""}
          >
            All
          </Button>
          <Button
            size="sm"
            onClick={() => setFilter("active")}
            className={filter === "active" ? "bg-gray-500" : ""}
          >
            Active
          </Button>
          <Button
            size="sm"
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "bg--500" : ""}
          >
            Completed
          </Button>
        </div>
        <ul className="space-y-3">
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className={`border p-3 rounded flex justify-between items-center `}
            >
              {editingTaskIndex === index ? (
                <Input data-testid= "inputEdit"
                  value={editingTaskText}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                />
              ) : (
                <span className={`${
                  task.completed ? "line-through" : ""
                }`}>{task.text}</span>
              )}
              <div className="flex gap-2">
                {editingTaskIndex === index ? (
                  <>
                    <Button size="sm" onClick={handleUpdateTask}>
                      Concluir Edição
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => {
                        setEditingTaskIndex(null);
                        setEditingTaskText("");
                      }}
                    >
                      Cancelar
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="sm"
                      onClick={() => handleToggleComplete(index)}
                    >
                      {task.completed ? "Desfazer" : "Concluir"}
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleEditTask(index)}
                    >
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleDeleteTask(index)}
                      data-testid="excluir"
                    >
                      Excluir
                    </Button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
