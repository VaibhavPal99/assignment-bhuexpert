import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/list/:id" element={<SinglePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
