import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organism/NavBar';
import Catalogue from './components/templates/Catalogue';

function App() {

  return (
    <div className="App bg-dark">
      <NavBar/>
      <Routes>
        <Route path="/dr7" element={<Catalogue />}>
           {/* <Route
            path="messages"
            element={<DashboardMessages />}
          />
          <Route path="tasks" element={<DashboardTasks />} /> */}
        </Route>
        {/* <Route path="about" element={<AboutPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
