import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [title, setTitle] = useState('Wall-E');

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
const movies = [

  {title: "Wall-E"},

  {title: "Pulp Fiction"},

  {title: "Matrix"},

  {title: "1670"},

];
  
  return (
    <div>
      <h1>My favourite movies to watch</h1>
      <h2>Titles</h2>
      <ul>{movies.map((movie) => <li key={movie.title}>{movie.title}</li>)} </ul>
      <h2>My favourite movie for today is {title} </h2>
      {title.length > 0 && <div>{message}</div>}
      <input type="text" value = {title} onChange={handleChange}/>
      <button onClick={() => alert(title)}> Show movie title </button>
      
    </div>
  );
}

export default App;


