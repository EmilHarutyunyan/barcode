import React from 'react';
import './App.css';
import { Navigate, useRoutes, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import Product from './pages/Product/Product';
import AddProduct from './pages/Product/AddProduct/AddProduct';
import Compare from './pages/Compare/Compare';
import AllProduct from './pages/Product/AllProduct/AllProduct';
import EditProduct from './pages/Product/EditProduct/EditProduct';
import Users from './pages/Users/Users';
import AddUser from './pages/AddUser/AddUser';
import Connect from './pages/Connect/Connect';
import DetailProduct from './pages/Product/DetailProduct/DetailProduct';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/features/user/UserSlice';
import PrivateRoute from './PrivateRoute';

function App() {
  const userLogin = useSelector(selectUser);
  return (
    <Routes>
      <Route exact path='/' element={userLogin.user.loginUser ?  <Navigate to="/dashboard" /> : <Auth />} />
      {/* <PrivateRoute> */}
      <Route path='/dashboard' element={<PrivateRoute >
        <Dashboard/>
      </PrivateRoute>}>
        <Route path=''  element={<Product />}>
          <Route path='' element={<AddProduct />} />
          <Route path='allProduct' exact element={<AllProduct />} >
            <Route path='detail' element={<DetailProduct />} />
          </Route>
          <Route path='allProduct/edit' element={<EditProduct />} />
        </Route>
        <Route path='compare' element={<Compare />} />
        <Route path='users' element={<Users />} />
        <Route path='addUsers' element={<AddUser />} />
        <Route path='connect' element={<Connect />} />
      </Route>
      {/* <Route path='/dashboard' element={<Dashboard />} >
           
        </Route> */}
      {/* </PrivateRoute> */}
    </Routes>
  );
  // return useRoutes([

  // {path: '/', element: <Auth/> },
  //   {path: '/dashboard', element: <Dashboard/>,
  //     children: [
  //       {path: '', element: <Product/>, children: [
  //           {path: '', element: <AddProduct/>},
  //           {path: 'allProduct', element: <AllProduct/>},
  //           {path: 'edit', element: <EditProduct/>},
  //           {path: 'detail', element: <DetailProduct/>},
  //         ]},
  //       {path: 'compare', element: <Compare/>},
  //       {path: 'users', element: <Users/>},
  //       {path: 'addUsers', element: <AddUser/>},
  //       {path: 'connect', element: <Connect/>}
  //     ]
  //   }

  // ]);
}

export default App;
