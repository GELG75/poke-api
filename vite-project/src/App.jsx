import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Personajes from './components/Personajes';
import { useParams } from 'react-router-dom';


export default function App() {
  const {hola} = useParams();
return (
<div className="App">
<BrowserRouter>
<Navbar />
<Routes>
 <Route path="/" element={<Home />} />
 <Route path="/Personajes/:id?" element={<Personajes />} />
 <Route path="/otros/:id?" element={<otros />} />
 </Routes>
</BrowserRouter>
</div>
);
}
