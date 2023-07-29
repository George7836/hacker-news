import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'

function App() {
  return (
    <BrowserRouter basename='/hacker-news/'>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
