import { useState, useEffect } from 'react';
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';

const App = () => {

  const [points, setPoints] = useState([]);

  //UseEffect con fetch() con promises
  // useEffect(() => {

  //   const fetchData = async () => {
  //     //fetch('http://localhost:5000/api/points')
  //     await fetch('/api/points')
  //       .then(res => res.json())
  //       .then(data => setPoints(data));
  //     console.log(points);
  //   };
  //   fetchData();
  //   console.log(
  //     'points: ', points
  //   );

  // }, []);

  //UseEffect con fetch() con async/await   const { data } = await fetch('http://localhost:5000/api/points');
  // useEffect(() => {
  //   const fetchPoints = async () => {
  //     const { data } = await fetch('/api/points');
  //     console.log('data',data);
  //     setPoints(data);
  //   };

  //   fetchPoints();

  //   console.log({ points });
  // }, []);
  
  useEffect(() => {
    const fetchPoints = async () => {
      const { data } = await axios.get('/api/points');
      console.log('data',data);
      setPoints(data);
    };
    fetchPoints();
    console.log({ points });
  }, []);

  return (
    <>
      <h1>Test Blockchain</h1>
      {points.map(p => (  
        <div key={p.player}>
          <p>Player: {p.player}</p>
          <p>Points: {p.points}</p>
          {/* <p>Result: {p.result}</p> */}
        </div>
      ))}
        
    </>
  );
}

export default App;
