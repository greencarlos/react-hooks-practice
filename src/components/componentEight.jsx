import { useState, useEffect, useCallback } from "react";

const todos = [
  "You often feel overwhelmed",
  "These aren't the droids you are looking for",
  "You are free to go",
  "Move along",
  "If the link in your email doesn't work",
];

function TodoSection({ getTodos }) {
  const [data, setData] = useState(
    todos.map((todo) => {
      return {
        content: todo,
        id: crypto.randomUUID(),
      };
    })
  );

  console.log("data", data);

  useEffect(() => {
    setData([...data, getTodos()]);
    console.log("getTodos function called");
  }, [getTodos]);

  return (
    <div>
      {data.map((todo) => {
        console.log("todo", todo);
        return (
          <p key={todo?.id}>
            {todo?.content || "Thinking of something todo..."}
          </p>
        );
      })}
    </div>
  );
}

export default function ComponentEight() {
  const [count, setCount] = useState(0);
  const [reverseCount, setReverseCount] = useState(100);

  const getTodos = useCallback(() => {
    return { content: todos[count], id: crypto.randomUUID() };
  }, [count]);

  return (
    <div className="app">
      <button disabled={count < -1} onClick={() => setCount(count - 1)}>
        -1
      </button>
      <button
        disabled={count > todos.length}
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
      <TodoSection getTodos={getTodos} />
    </div>
  );
}
