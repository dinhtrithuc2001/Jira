import { Route, Routes, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Board from './pages/Board'
import CreateProject from './pages/CreateProject'
import NotFound from './pages/NotFound';
import { history } from './utils/history';
import React, { Suspense, lazy } from 'react';
import Loading from './components/Loading';

const HomeTemplate = lazy(() => import('./templates/HomeTemplate/HomeTemplate'))
const JiraTemplate = lazy(() => import('./templates/JiraTemplate/JiraTemplate'))

function App() {
    return (
        <HistoryRouter history={history}>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={< HomeTemplate />}>
                        <Route index path='/' element={<Login />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                    </Route>
                    <Route path='/project' element={<JiraTemplate />}>
                        <Route path='board' element={<Board />} />
                        <Route path='create' element={<CreateProject />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
        </HistoryRouter>
    );
}

export default App;
