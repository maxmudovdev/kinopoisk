import MoviesView from '@/pages/movies';
import HomeView from '@/pages/home'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '@/layouts';

const Routers = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default Routers;
