import React from 'react';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import { useSelector } from 'react-redux';
import CartPage from '../pages/cart/Cart';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PageNotFound from '../pages/404/PageNotFound';
import LoginPage from '../pages/login/Login';
import SignupPage from '../pages/signup/Signup';
import { Navigate } from 'react-router-dom';
import PublicRoute from './PublicRoute';

const Routing = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    return (
        <Router>
            <Routes>

                <Route path="/login" element={<PublicRoute element={<LoginPage />} />} />
                <Route path="/signup" element={<PublicRoute element={<SignupPage />} />} />
                <Route path="*" element={<PageNotFound />} />
               
                { 
                    isAuthenticated ? (
                        <Route element={<Layout />}>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/cart" element={<CartPage />} />
                        </Route>
                    ) : (
                        <Route path="/" element={<Navigate to="/login" />} />
                    )
                }
            </Routes>
        </Router>
    );
};

const Layout = () => {
    return (
      <div>
        <Header />
            <main>
                <Outlet />
            </main>
        <Footer />
      </div>
    );
  };

export default Routing;
