import Header from "./components/header-components/Header.tsx"
import Main from "./components/main-components/Main.tsx"
import DataProvider from "./contexts/DataContext/DataProvider.tsx"
import ThemeProvider from "./contexts/ThemeContext/ThemeProvider.tsx"

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Header />
        <Main />
      </DataProvider>
    </ThemeProvider>
  )
}

export default App
