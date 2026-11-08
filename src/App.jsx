import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import aboutRoutes from "./routes/aboutRoutes";
// import academicsRoutes from "./routes/academicsRoutes";   // هم‌تیمی‌ها
// import admissionRoutes from "./routes/admissionRoutes";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {aboutRoutes}
        {/* {academicsRoutes} */}
        {/* {admissionRoutes} */}
      </Route>
    </Routes>
  );
}