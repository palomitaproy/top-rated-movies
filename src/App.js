import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import {SearchBox} from "./components/search-box/search-box";
import "./App.css";

/*  'https://api.themoviedb.org/3/movie/top_rated?api_key=95de7de7e6d310341b6b95a4b35b102b&language=en-US&page=1'*/

const url = "https://api.themoviedb.org/3";
const field = "/movie/top_rated?";
const key = "api_key=95de7de7e6d310341b6b95a4b35b102b";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField:''
    };
   
  }
  componentDidMount() {
    fetch(`${url}${field}${key}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.results }))
      .catch((err) => {
        console.log(err);
      });
    }
  handleChange= e =>{
    this.setState({searchField:e.target.value})
  }
 

  render() {
    const {movies, searchField}= this.state;
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>The top rated movies</h1>
         <SearchBox 
          placeholder='search movies' 
          handleChange = {this.handleChange}
          />
        <CardList movies={filteredMovies} />
       </div>
    );
  }
}

export default App;
