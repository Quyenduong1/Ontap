import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './modules/Home/Home';
import MainLayout from './layouts/MainLayout/MainLayout';
import MovieDetails from './modules/MovieDetails/MovieDetails';

const Home = lazy(() => import('./modules/Home/Home'))

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path='/movies/:movieId' element={<MovieDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
    
  );
}

export default App;
