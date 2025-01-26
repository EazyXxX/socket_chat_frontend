import { Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="flex flex-col justify-start items-center h-screen w-screen">
        <Text fontFamily="'Honk', sans-serif" color="white" fontSize={"6xl"}>
          socket_chat
        </Text>
        <Routes>
          <Route path="/" element={<div>//////!</div>} />
          <Route path="auth" element={<div>AUTH!</div>} />
          <Route path="user" element={<div>user!</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
