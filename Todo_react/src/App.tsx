import { Container, Stack } from "@chakra-ui/react";
import Header from "./components/header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/todoList";

export const BASE_URL =
  import.meta.env.Mode === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  return (
    <Stack>
      <Container>
        <Header />
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  );
}

export default App;
