import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { MoviesContainer } from '../containers/MoviesContainer';
import { MovieCard } from './movies/MovieCard';
import { MovieForm } from './movies/MovieForm';
import { Navbar } from './navigation/Navbar';
import { Header } from './navigation/Header';
import { Footer } from './navigation/Footer';
import { Home } from './Home';
import { About } from './About';


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Header bigTitle="Top Movies"
                        smallTitle="What to watch"/>
            </Router>

            <Switch>
                <Route exact path="/movies/new">
                    <MovieForm />
                </Route>
                
                <Route exact path="movies/:id">
                    <MovieCard />
                </Route>

                <Route exact path="/movies">
                    <MoviesContainer />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

            <Footer />
        </div>
    )
}

export default App;