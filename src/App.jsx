import { BrowserRouter, Route, Routes} from "react-router-dom"
import CardInfo from "./pages/CardInfo"
import Home from "./pages/Home"
import Category from "./pages/Category"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>

        <Route path="/info/:catalog/:id" element={<CardInfo />} >
        </Route>

        <Route path="/category/:id" id element={<Category id/>} >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
