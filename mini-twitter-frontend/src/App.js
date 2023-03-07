import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './protected-routes/protected-route';
import Login from './views/auth/login';
import Register from './views/auth/register';
import Home from './views/home';
import { useSelector } from 'react-redux';
import Profile from './views/profile/profile';
import Search from './views/search/search';

function App() {
  const token = useSelector(state=>state.auth.token);

  return ( <>
    <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/home" element={token?<Home/>:<Navigate to={"/login"}/>} />
            <Route path="/profile" element={token?<Profile/>:<Navigate to={"/login"}/>} />
            <Route path="/search" element={token?<Search/>:<Navigate to={"/login"}/>} />
    </Routes>
  </>);
}

export default App;
