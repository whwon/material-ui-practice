import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import NavBar from './components/navigation/NavBar'
import Home from './components/Home'
import TableData from './components/TableData'
import GraphData from './components/GraphData'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%'
  }
}))

function App() {
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.root}>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/table">
            <TableData />
          </Route>
          <Route path="/graph">
            <GraphData />
          </Route>
          <Route path="/about"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
