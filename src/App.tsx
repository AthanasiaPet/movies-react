import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';


function App() {


  // @ts-ignore
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
