import mountains from './mountains.png';
import './App.css';
import Table from './Table';
import PhotoIcon from '@mui/icons-material/Photo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mountains} alt="mountains" />
        <p style={{ color: '#000000' }}>
          The New Hampshire 4000-footers
          <br/><br/>
          <Table />
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
