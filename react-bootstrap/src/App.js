import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Title from "./pages/Home/Title";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Title />
        <Routes>
          {/* Regular routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Test />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
