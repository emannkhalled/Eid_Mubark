import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Welcome from "./pages/Welcome.jsx";
import EidMessage from "./pages/EidMessage.jsx";
import Spirit from "./pages/Spirit.jsx";
import Gallery from "./pages/Gallery.jsx";
import Wishes from "./pages/Wishes.jsx";
import Countdown from "./pages/Countdown.jsx";
import Finale from "./pages/Finale.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg text-white overflow-hidden relative">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Welcome />} />
          <Route path="/message" element={<EidMessage />} />
          <Route path="/spirit" element={<Spirit />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/finale" element={<Finale />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
