import styles from './common/common.module.scss'
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import HomePage from "./pages/Home/HomePage/HomePage";



const About = () => {
  return <div> About</div>
}

const Goods = () => {
    return <div>Goods</div>
}

function App(props) {
  console.log(props)
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/coffee" element={<About />} />
              <Route path="/goods" element={<Goods />} />
          </Routes>
      </Layout>
  );
}

export default App;
