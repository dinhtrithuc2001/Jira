import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Banner from './pages/Banner'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import JiraTemplate from './templates/JiraTemplate/JiraTemplate';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={< HomeTemplate />}>
                        <Route index path='/' element={<Login />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                    </Route>
                    <Route path='/' element={<JiraTemplate />}>
                        <Route path='banner' element={<Banner />} />
                        <Route path='hot' element={<Banner />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
