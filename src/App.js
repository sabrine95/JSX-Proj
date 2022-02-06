
import './style.css';
import img from './imgsrc.JPG';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Workshop JSX</h1>

<br/>

<img className="img2" src={img} alt="img" />


<br/>

<img className="img1" src="/imgpub.jpg" alt="img" />

</div>

<video className="vid" width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
