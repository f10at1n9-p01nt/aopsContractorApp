import { Route, Routes } from "react-router-dom"
import Login from './pages/Login/Login';
import InstrCourseSelect from './pages/InstrCourseSelect';
import InstrGenPref from './pages/InstrGenPref';
import ReleaserCourseSelect from './pages/ReleaserCourseSelect';
import ReleaserGenPref from './pages/ReleaserGenPref';
import Schedule from './pages/Schedule';
import Header from './components/Header';

function App() {
    return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='instructor_select' element={<InstrCourseSelect />} />
        <Route path='instructor_genpref' element={<InstrGenPref />} />
        <Route path='releaser_select' element={<ReleaserCourseSelect />} />
        <Route path='releaser_genpref' element={<ReleaserGenPref />} />
        <Route path='schedule' element={<Schedule />} />
        <Route path='*' element={<Login />} />
      </Routes> 
    </>
    );
  }

export default App;