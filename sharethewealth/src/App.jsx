import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./Pages/CreateEvent";
import Title from "./components/Title";
import BottomNav from "./components/BottomNav";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import MyEvents from "./Pages/MyEvents";
function App() {
  return (
    <>
      <BrowserRouter>
        <Title></Title>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-events" element={<MyEvents/>} />
        </Routes>
        <BottomNav></BottomNav>
      </BrowserRouter>
    </>
  );
}

export default App;
