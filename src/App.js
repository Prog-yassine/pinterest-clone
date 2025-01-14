import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
