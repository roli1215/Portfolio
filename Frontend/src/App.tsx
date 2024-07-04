import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/main/mainScreen';

function App() {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}

export default App;
