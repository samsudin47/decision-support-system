import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registrasi from "./components/Registrasi";
import PageLayout from "./layouts/PageLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />} />
          <Route path="/register" element={<Registrasi />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
