import Home from './components/Home/Home';
import Articulos from './components/Articulos/Articulos';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home/>}
          />
          <Route
            exact
            path="/articulos"
            element={<Articulos/>}
          />
          
        </Routes>
      </Router>
    </>
  );
};

export default App
