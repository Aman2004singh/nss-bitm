import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Hero from "./components/Hero";
import Notices from "./components/Notices";
import Message from "./components/Message";
import AboutUs from "./components/AboutUs";
import ActivityPage from "./components/ActivityPage";
import GovernmentSchemes from "./pages/GovernmentSchemes";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Notices />
              <Message />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/activity/:domainId" element={<ActivityPage />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
      </Route>
    </Routes>
  );
}
