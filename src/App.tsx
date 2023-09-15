import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Works } from "./pages/Works";
import { WorksHalls } from "./components/WorksHalls";
import { WorksChairs } from "./components/WorksChairs";
import { WorksAutomotive } from "./components/WorksAutomotive";
import { WorksMotorcycles } from "./components/WorksMotorcycles";
import { WorksHome } from "./components/WorksHome";
import Error404 from "./pages/Error404";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/trabajos-realizados" element={<Works />}>
              <Route index element={<WorksHome />}></Route>
              <Route
                path="/trabajos-realizados/salas"
                element={<WorksHalls />}
              />
              <Route
                path="/trabajos-realizados/automotriz"
                element={<WorksAutomotive />}
              />
              <Route
                path="/trabajos-realizados/sillas"
                element={<WorksChairs />}
              />
              <Route
                path="/trabajos-realizados/motos"
                element={<WorksMotorcycles />}
              />
            </Route>
            <Route path="/acerca" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
