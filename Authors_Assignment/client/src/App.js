import './App.css';
import ListAll from './components/ListAll';
import Details from './components/Details';
import Edit from './components/Edit';
import New from './components/New';
import Header from './components/Header';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ListAll path ="/authors" />
        <New path = "/authors/new" />
        <Edit path = "/authors/:id/edit" />
        <Details path ="/authors/:id" />
      </Router>
    </div>
  );
}

export default App;
