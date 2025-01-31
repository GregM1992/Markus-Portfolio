import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css';
import { Image } from 'react-bootstrap';

function App() {
  return (
    <>
    <NavBar />
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
        <Image src={process.env.PUBLIC_URL + '/images/Greg and Jubi.jpg'} roundedCircle style={{ width: '300px', height: '300px', marginTop: '20px' }} />
        <h1> Gregory Markus </h1>
        <h4 className='bio'> I am a passionate developer with a background in C# and .NET, having completed a year of training at Nashville Software School. My love for music, learning, art drives my creativity and problem-solving approach. With experience in the food industry and retail, including my current role as a server at 5 Points Pizza, I thrive in fast-paced environments and enjoy connecting with people. I am eager to continue growing as a developer and applying my diverse experiences to build meaningful solutions.
        </h4>
      </header>
    </div>
    </>
  );
}

export default App;
