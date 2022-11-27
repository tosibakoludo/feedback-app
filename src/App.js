import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Card from './components/shared/Card';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import Post from './components/Post';
import Post2 from './components/Post2';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={<><FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList /></>}>
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/post/:id/:name' element={<Post />} />
                        <Route path='/post2/*' element={<Post2 />} />
                    </Routes>
                    <AboutIconLink />
                    <Card>
                        <NavLink to='/' acttiveClassName='active'>
                            Home
                        </NavLink>
                        <NavLink to='/about' acttiveClassName='active'>
                            About
                        </NavLink>
                    </Card>
                </div>
            </Router>
        </FeedbackProvider>);
}

export default App;