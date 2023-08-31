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

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/trabajos-realizados" element={<Works />}>
            <Route index element={<WorksHalls />}></Route>
            <Route path="/trabajos-realizados/salas" element={<WorksHalls />} />
            <Route
              path="/trabajos-realizados/sillas"
              element={<WorksChairs />}
            />
          </Route>
          <Route path="/acerca" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
