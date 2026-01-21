import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Teams from "./pages/Teams";
import Hero from "./components/Hero";
import Message from "./components/Message";
import AboutUs from "./components/AboutUs";
import ActivityPage from "./components/ActivityPage";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import Events from "./components/Events";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Message />
            </>
          }
        />
        <Route path="/notice" element={<Message />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activity/:domainId" element={<ActivityPage />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
      </Route>
    </Routes>
  );
}
