"use client";

import { useState, useEffect } from "react";
import "./../app/app.css";

interface Todo {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoContent, setNewTodoContent] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));
      setTodos(parsedTodos);
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodoContent.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        content: newTodoContent.trim(),
        completed: false,
        createdAt: new Date()
      };
      setTodos([...todos, newTodo]);
      setNewTodoContent("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>My Todo App</h1>
      
      {/* Add Todo Form */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={newTodoContent}
          onChange={(e) => setNewTodoContent(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          placeholder="What needs to be done?"
          style={{
            flex: 1,
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "16px"
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "12px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Add
        </button>
      </div>

      {/* Filter Buttons */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={() => setFilter("all")}
          style={{
            padding: "8px 16px",
            backgroundColor: filter === "all" ? "#007bff" : "#f8f9fa",
            color: filter === "all" ? "white" : "#333",
            border: "1px solid #ddd",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          All ({todos.length})
        </button>
        <button
          onClick={() => setFilter("active")}
          style={{
            padding: "8px 16px",
            backgroundColor: filter === "active" ? "#007bff" : "#f8f9fa",
            color: filter === "active" ? "white" : "#333",
            border: "1px solid #ddd",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Active ({activeTodosCount})
        </button>
        <button
          onClick={() => setFilter("completed")}
          style={{
            padding: "8px 16px",
            backgroundColor: filter === "completed" ? "#007bff" : "#f8f9fa",
            color: filter === "completed" ? "white" : "#333",
            border: "1px solid #ddd",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Completed ({completedTodosCount})
        </button>
      </div>

      {/* Todo List */}
      <div style={{ marginBottom: "20px" }}>
        {filteredTodos.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
            {filter === "all" ? "No todos yet. Add one above!" : 
             filter === "active" ? "No active todos." : "No completed todos."}
          </p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                  backgroundColor: "white"
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  style={{ marginRight: "12px" }}
                />
                <span
                  style={{
                    flex: 1,
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#666" : "#333"
                  }}
                >
                  {todo.content}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px"
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Clear Completed Button */}
      {completedTodosCount > 0 && (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={clearCompleted}
            style={{
              padding: "8px 16px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Clear Completed ({completedTodosCount})
          </button>
        </div>
      )}

      <div style={{ marginTop: "40px", textAlign: "center", color: "#666" }}>
        🎉 Pure frontend todo app with local storage!
        <br />
        <small>Your todos are saved locally in your browser.</small>
      </div>
    </main>
  );
}
