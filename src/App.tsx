import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        {/* Setting all links to only one existing page on app */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
