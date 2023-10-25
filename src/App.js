
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './features/Dashboard';
import Teachers from './features/teachers/Teachers';
import Students from './features/students/Student';
import Header from './component/Header';

import Class from './features/class/Class';
import ShowDetails from './component/ShowDetails';
function App() {
 
  
  return (
    <div className="App">
    <header>
      <Header />
    </header>
    <main>
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/teachers' element={<Teachers />} />
    <Route path='/students' element={<Students />} />
    <Route path="/class" element={<Class />  } />
    <Route path='/:type/:id' element={<ShowDetails/>} />
  </Routes>

    </main>

    </div>
  );
}

export default App;
