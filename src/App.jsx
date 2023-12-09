import './App.scss'
import HomeLander from './components/Home/HomeLander'
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
    <HomeLander />
    </BrowserRouter>
  )
}

export default App
