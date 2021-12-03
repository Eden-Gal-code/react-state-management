import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecoilPage from "./pages/RecoilPage";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/recoil">Recoil</Link>
            </li>
            <li>
              <Link to="/mobx">Mobx</Link>
            </li>
            <li>
              <Link to="/redux">Redux</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/recoil" element={<RecoilPage />}></Route>
          <Route path="/redux">redux</Route>
          <Route path="/mobx">mobx</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
