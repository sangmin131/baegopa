import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 적용 
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import './pages/search/Search.module.css';
import './pages/subpage/Sub.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetail from './pages/recipe/RecipeDetail';
import Header from './pages/main/mainfull/Header';
import Today from './pages/main/best/Today';
import Footer from './pages/main/mainfull/Footer';
import SearchPage from './pages/search/SearchPage';
import BestSlider from './pages/main/best/BestSlider';
import NomatchPage from './pages/main/NomatchPage';
import Main from './pages/main/Main';
import styles from './App.css'



function App() {


  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/today" element={<Today />} />
          <Route path="/best" element={<BestSlider />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe" element={<RecipeDetail />} />
          <Route path="*" element={<NomatchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
