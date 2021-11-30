import styles from './common/common.module.scss'
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import HomePage from "./pages/Home/HomePage/HomePage";
import CoffeePage from "./pages/Coffee/CoffeePage/CoffePage"
import GoodsPage from "./pages/Goods/GoodsPage/GoodsPage"

function App(props) {
  console.log(props)
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/coffee" element={<CoffeePage />} />
              <Route path="/goods" element={<GoodsPage />} />
          </Routes>
      </Layout>
  );
}

export default App;
