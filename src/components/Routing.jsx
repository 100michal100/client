import { Route, Routes } from 'react-router';
import { AboutUs } from './AboutUs.jsx';
import { Home } from './Home.jsx';
import { NotFound } from './NotFound.jsx';

export const Routing = () => {
    return <>
        <Routes>
            <Route path='*' element={<NotFound></NotFound>}></Route>
            <Route path='/about' element={<AboutUs></AboutUs>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
    </>;
};