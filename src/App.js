import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "./components/ArticleList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfoOafArticle from "./components/InfoOafArticle";
import NavBaree from "./components/NavBaree";

function App() {
  const [list, setList] = useState("");
  // console.log(list)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e5e4aefc41b9431fa5624dc1a80d50e4"
        );
        setList(res.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
          <NavBaree/>
      <Router>
        <Routes>
          <Route path="/" element={<ArticleList articles={list} />} />
          <Route path="/article/:title" element={<InfoOafArticle articles={list}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
