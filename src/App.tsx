import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import NavBar from "./components/navbar/NavBar"
import Home from "./pages/home/Home"
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import FormularioCategoria from "./components/categoria/formCategoria/FormCategoria"
import ListarCategorias from "./components/categoria/listarCategoria/ListarCategoria"
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormularioCategoria />} 
          />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} 
          />  
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App