import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./Pages/CreateEvent";
import Title from "./components/Title";
import BottomNav from "./components/BottomNav";
import HomePage from "./Pages/HomePage";

import SignIn from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import MyEvents from "./Pages/MyEvents";
import Event from "./Pages/Event";
import Portal from "./Pages/Portal";
import CreateActivity from "./Pages/CreateActivity";

function App() {
  return (
    <>
      <BrowserRouter>
        <Title></Title>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/sign-in" element={<SignIn />} />
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
          {/* <Route path="/create-event" element={<CreateEvent />} /> */}
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-events" element={<MyEvents/>} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/create-activity" element={<CreateActivity />} />
          <Route path="/event/:event_id" element={<Event/>}/>

        </Routes>
        <BottomNav></BottomNav>
      </BrowserRouter>
    </>
  );
}

export default App;
