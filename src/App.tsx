import { Box, Container } from "@mui/material";
import { TodoList } from "./recoil-samples/TodoList";

function App() {
  return (
    <Box
      className="App"
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <TodoList />
      </Container>
    </Box>
  );
}

export default App;
