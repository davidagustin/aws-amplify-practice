"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

// Conditionally import amplify outputs
let outputs: any = {};
let client: any = null;

try {
  outputs = require("@/amplify_outputs.json");
  Amplify.configure(outputs);
  client = generateClient<Schema>();
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
  // Create a mock client for development
  client = {
    models: {
      Todo: {
        observeQuery: () => ({
          subscribe: ({ next, error }: { next: (data: any) => void; error: (err: any) => void }) => {
            // Mock data for development
            next({ items: [] });
            return { unsubscribe: () => {} };
          }
        }),
        create: () => {
          console.log("Mock create todo - backend not deployed");
        }
      }
    }
  };
}

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [error, setError] = useState<string | null>(null);
  const [isBackendDeployed, setIsBackendDeployed] = useState<boolean>(false);

  useEffect(() => {
    // Check if backend is deployed
    try {
      require("@/amplify_outputs.json");
      setIsBackendDeployed(true);
    } catch {
      setIsBackendDeployed(false);
    }
  }, []);

  function listTodos() {
    try {
      client.models.Todo.observeQuery().subscribe({
        next: (data: any) => setTodos([...data.items]),
        error: (err: any) => setError("Failed to load todos: " + err.message),
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
      {!isBackendDeployed && (
        <div style={{ 
          background: '#fff3cd', 
          border: '1px solid #ffeaa7', 
          padding: '10px', 
          margin: '10px 0',
          borderRadius: '4px',
          color: '#856404'
        }}>
          ⚠️ Backend not deployed yet. This is a demo mode with mock data.
        </div>
      )}
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
