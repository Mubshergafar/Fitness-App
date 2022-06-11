import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Footer } from "./components";
import { ExerciseDetail, Home } from "./pages";

function App() {
  return (
    <Box width="400" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
