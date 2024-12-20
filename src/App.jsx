import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
const App = () => {
  return (
    <Routes>
      <Route path="/tasks" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
