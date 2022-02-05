import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./Pages/CreateEvent";
import Title from "./components/Title";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Title></Title>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
