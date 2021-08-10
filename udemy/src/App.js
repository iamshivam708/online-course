import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CourseDetail from './components/CourseDetail';
import Index from './components/Index';
import Course from './components/Course';
import Login from './components/Login';
import Signup from './components/Signup';
import Categories from './components/Categories';
import Search from './components/Search';
import About from './components/About';
import Contact from './components/Contact';
import AllCourse from './components/AllCourse';

function App() {
  return (
    <BrowserRouter>
     <Switch>
        <Route path='/' exact component={Index} />
        <Route path="/courseDetail/:id" exact component={CourseDetail}/>
        <Route path="/course/:id" exact component={Course}/>
        <Route path="/allCourses" exact component={AllCourse}/>
        <Route path="/categories/:id" exact component={Categories} />
        <Route path="/search/:query" exact component={Search}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;