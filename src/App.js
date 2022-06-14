import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
