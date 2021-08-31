import BookList from './components/BookList'
import MyData from './context/BookContext';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (

    <ThemeContextProvider>
      <MyData>
        <BookList />
      </MyData>
    </ThemeContextProvider>

  );
}

export default App;
