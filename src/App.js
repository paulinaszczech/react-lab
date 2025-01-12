import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const [movies, setMovies] = useState([]);

  let message = '';
  if (title.length < 5) {
    message = 'Title is too short';  
  } else if (title.length <15) {
    message = 'Fantastic title!'
  } else { 
    message = 'Title is too long';
  }

  function handleChange(event) {
    setTitle(event.target.value);
}

  function handleAddMovie(){
    //const newMovie = {title: title, year: year};
    //setMovies([...movies, newMovie])
    setMovies([...movies, {title,year}]);
  }



  return (
    <div>
      <h1>My favourite movies to watch</h1>
      <h2>Titles</h2>
      <ul>{movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.year})</li>)} </ul>
      <h2>Add movie</h2>
      {title.length > 0 && <div>{message}</div>}
      <label>Title</label>
      <input type="text" value = {title} onChange={handleChange}/>
      <label>Year</label>
      <input type="text" value = {year} onChange = {(event) =>  setYear(event.target.value)}/>
      <button onClick= {() => setMovies ([...movies, {title,year}])} > Add movie </button>
      
    </div>
  );
}

export default App;


