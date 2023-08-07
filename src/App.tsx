import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <BrowserRouter basename='/hacker-news/'>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <AppRouter/>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
