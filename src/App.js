import { BrowserRouter, Routes, Route } from "react-router-dom";
import Devices from "./components/Devices";
import Heroes from "./components/Heroes";
import Home from "./components/Home";
import Login from "./components/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="devices" element={<Devices />} />
        <Route path="heroes" element={<Heroes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
