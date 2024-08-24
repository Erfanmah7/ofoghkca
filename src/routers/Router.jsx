import { Route, Routes } from "react-router-dom";
import FormPage from "../pages/FormPage";
import TablePage from "../pages/TablePage";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
