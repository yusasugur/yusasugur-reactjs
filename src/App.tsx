import './App.css';
import MainPage from './Components/MainPage';
import ItemDetail from './Components/ItemDetail';
import Navbar from './Components/Navbar';
import CreateProduct from './Components/CreateProduct';
import { Routes, Route } from 'react-router-dom';
function App() {
    return (
        <div className='App bg-gray-200 p-8 '>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/:id' element={<ItemDetail />} />
                <Route path='/add' element={<CreateProduct />} />
            </Routes>
        </div>
    );
}

export default App;
