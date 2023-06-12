import mountains from './mountains.png';
import './App.css';
import Table from './Table';
import PhotoIcon from '@mui/icons-material/Photo';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mountains} alt="mountains" />
        <p style={{ color: '#000000' }}>
          The New Hampshire 4000-footers
          <br /><br />
          <Grid item xs={12}>
            <Table />
          </Grid>
        </p>
      </header>
    </div>
  );
}

export default App;
