import logo from './logo.svg';
import './App.css';
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>Let's build Netflix Clone Front End!</h1>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} ></Row>
    </div>
  );
}

export default App;
