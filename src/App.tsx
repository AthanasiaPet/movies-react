import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Navbar from './components/Navbar';


function App() {


  // @ts-ignore
    return (
    <>
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </BrowserRouter>

    </>
  )
}

export default App
