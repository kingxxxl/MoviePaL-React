import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RequireAuth from './components/RequireAuth';
import Wishlist from "./pages/MovieLists/Wishlist";
import FavoriteList from "./pages/MovieLists/FavoriteList";
import WatchedList from "./pages/MovieLists/WatchedList";

const App = () => {
  return (
    <ChakraProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route  element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/favorite-list" element={<FavoriteList />} />
            <Route path="/watched-list" element={<WatchedList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
