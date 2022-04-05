import { useState, useEffect } from 'react';
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';

const App = () => {

  const [points, setPoints] = useState([]);

  //UseEffect con fetch() con promises
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/points')
  //     .then(res => res.json())
  //     .then(data => setPoints(data));
  // }, []);

  //UseEffect con fetch() con async/await   const { data } = await fetch('http://localhost:5000/api/points');
  useEffect(() => {
    const fetchPoints = async () => {
      const { data } = await fetch('/api/points');
      setPoints(data);
    };

    fetchPoints();

  }, []);
  
  // useEffect(() => {
  //   const fetchPoints = async () => {
  //     const { data } = await axios.get('/api/points');
  //     setPoints(data);
  //   };
  //   fetchPoints();
  // }, []);

  return (
    <>
      <h1>Test Blockchain</h1>
    </>
  );
}

export default App;
