import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import AddMovie from "./pages/AddMovie";


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:id' element={<MovieDetail />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add" element={<AddMovie />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App