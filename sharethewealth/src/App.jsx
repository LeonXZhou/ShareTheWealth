import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./Pages/CreateEvent";
import Title from "./components/Title";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";
import Activity from "./components/Activity";

function App() {
  return (
    <>
      <Title></Title>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/sign-in" element={<SignIn />} />
          {/* <Route path="/create-event" element={<CreateEvent />} /> */}
          <Route path="/create-event" element={<Activity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
