import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/Listavagas'

import estiloOrigin from './containers/theme/origin'

import Cabecalho from './components/Cabecalho'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={estiloOrigin}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
