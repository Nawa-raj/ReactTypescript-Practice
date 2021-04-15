declare module "react-render-html";
declare module "react-uuid";

interface Todo {
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string) => void;
