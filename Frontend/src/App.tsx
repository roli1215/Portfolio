import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/main/mainScreen';
import { NavBar } from './components/navbar/nav';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
