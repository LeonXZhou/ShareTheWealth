import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./components/CreateEvent";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title></Title>
      <BrowserRouter>
        <Routes>
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
