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
          <h3> Story time! </h3>
        <p className='bio'>
        My late father was a sound engineer, and our home was often filled with fascinating pieces of equipment he brought back from work. These big, heavy boxes, bristling with wires and nodes, seemed to hold secrets far beyond my comprehension. They evoked a mix of curiosity and awe, knowledge just out of reach.

        One day, I mustered the courage to ask if I could take one apart. To my surprise, he said yes. I spent the next three days dismantling a complicated audio receiver, completely absorbed in the maze of control boards and tangled wires. Even though much of it was far beyond the understanding of a ten-year-old, the experience unlocked something in me.

        I realized that everything—no matter how complex—has a purpose and a reason if you're willing to look beneath the surface and seek a little guidance. That moment planted a seed in me, though its significance wouldn't fully take root until 15 years later.

        </p>
<p className='bio'>
        Years later, after being diagnosed with ADHD and enduring constant hardships in school, I found myself reflecting on what life had thrown at me. During the COVID pandemic, I decided it was time to hit therapy hard. It was a transformative experience. For the first time, I had the opportunity to lay myself bare and truly explore who I was.
Therapy reminded me of the principles I'd learned as a child tinkering with that audio receiver. A look inside, coupled with some guidance, could reveal a deeper understanding. It wasn't always easy, but the process showed me that everything—no matter how complicated—has a purpose and a way forward, even when it feels tangled and overwhelming.

For most of my adult life, I'd worked food service jobs, always feeling stuck without a clear path to success. But therapy gave me the chance to finally breathe, reflect, and ask myself what I truly wanted to do. That period of self-discovery led me to the idea of joining Nashville Software School—a chance to forge a new path and build something meaningful for my future.

</p>
<p className='bio'>
Nashville Software School was one of the hardest things I've ever done. It was unlike anything I had faced before, and it brought back many of the doubts and insecurities I struggled with in school. At times, it felt like I was fighting the same battles all over again.

But this time, something was different: I chose to be here. This wasn't something I was forced into—it was a path I deliberately decided to take. That choice gave me the strength to stick with it, even when the challenges felt overwhelming.

Through the process, I developed skills and a patience for myself I didn't know I had. I came to understand a powerful truth: if I took my time and allowed space for my insecurities, I could learn and understand anything I wanted. That realization wasn't just about coding or software development—it was about proving to myself that growth and understanding were possible, no matter how intimidating the task might seem.

</p>



        
      
      </header>
    </div>
    </>
  );
}

export default App;
