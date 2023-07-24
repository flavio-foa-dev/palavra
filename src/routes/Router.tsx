import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Palavra from '../pages/Palavra/Palavra';
import Devocional from '../pages/Devocional/Devocional';
import Historia from '../pages/Historia/Historia';
import Book from '../pages/Books/Book';
import Menu from '../components/Menu/Menu';

export default function Router() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/palavra" element={<Palavra/>} />
        <Route path="/devocional" element={<Devocional/>} />
        <Route path="/historia" element={<Historia/>} />
        <Route path="livro" element={<Book/>} />
      </Routes>
    </BrowserRouter>
  );
}
