
import "./App.css";

import React, { useEffect, useState ,Component} from 'react';
import Navbar from "./components/Navbar";
import News from "./components/News";
import { useLocation } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
    c="John"
  render() {
    const pageSize=15
    return (
  
      <div>
        
        <Router>
        <Navbar />
        {/* Hello my first class based Component {this.c} */}
        {/* <News pageSize={this.pageSize} q={"climate crisis"}/> */}
        <Routes>
          <Route exact path="/electric vehicles" element={<News key="electric vehicles" pageSize={pageSize} q={"electric vehicles"}/>}/>
          <Route exact path="/" element={<News pageSize={this.pageSize} q={"sustainable development"}/>}/>
          <Route exact path="/artificial intelligence" element={<News key="artificial intelligence" pageSize={pageSize} q={"artificial intelligence"}/>}/>
          <Route exact path="/renewable energy" element={<News key="renewable energy" pageSize={pageSize} q={"renewable energy"}/>}/>
          <Route exact path="/global warming" element={<News key="global warming" pageSize={pageSize} q={"global warming"}/>}/>
          <Route exact path="/climate crisis" element={<News key="climate crisis" pageSize={pageSize} q={"climate crisis"}/>}/>
          <Route path="/search" element={<NewsWithSearch />} />
        </Routes>
        </Router>
      </div>
    )
  }
}
// function NewsWithSearch() {
//   // const location = useLocation();
//   //   const searchParams = new URLSearchParams(window.location.search);
//   //   const query = searchParams.get('q') || 'climate change'; // Default query if not specified

//   //   console.log('Search query:', query); // Log the query to verify

//   //   return <News q={query} />;
//   const location = useLocation();
//   const [query, setQuery] = useState(new URLSearchParams(location.search).get('q') || 'climate change');

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const newQuery = searchParams.get('q') || 'climate change';
//     setQuery(newQuery);
//   }, [location.search]);

//   return <News q={query} />;
// }
function NewsWithSearch() {
  const location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search).get('q') || 'climate change');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newQuery = searchParams.get('q') || 'climate change';
    setQuery(newQuery);
  }, [location]);

  return <News q={query} />;
}


