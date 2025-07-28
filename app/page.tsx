"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

// Conditionally import amplify outputs
let outputs: any = {};
try {
  outputs = require("@/amplify_outputs.json");
  Amplify.configure(outputs);
} catch (error) {
  console.warn("Amplify outputs not found. Backend may not be deployed yet.");
  // Provide a basic configuration for development
  Amplify.configure({
    API: {
      GraphQL: {
        endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql",
        region: process.env.NEXT_PUBLIC_AWS_REGION || "us-east-1",
        defaultAuthMode: "apiKey",
      },
    },
  });
}

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [error, setError] = useState<string | null>(null);

  function listTodos() {
    try {
      client.models.Todo.observeQuery().subscribe({
        next: (data) => setTodos([...data.items]),
        error: (err) => setError("Failed to load todos: " + err.message),
      });
    } catch (err) {
      setError("Failed to connect to backend");
    }
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    try {
      client.models.Todo.create({
        content: window.prompt("Todo content"),
      });
    } catch (err) {
      setError("Failed to create todo");
    }
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
