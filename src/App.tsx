import { Grid,GridItem, Show } from '@chakra-ui/react'

function App() {
  return <Grid templateAreas={{
    base:`"nav" "main"`,
    md:`"nav nav" "aside main"`,
    lg:`"nav nav" "aside main"`
  }}>
  <GridItem area='nav' bg='red'>Nav</GridItem>
  <Show above='md'>
  <GridItem area='aside' bg='yellow'>Aside</GridItem>
  </Show>
  <GridItem area='main' bg='blue'>Main</GridItem>
  </Grid>
}

export default App
