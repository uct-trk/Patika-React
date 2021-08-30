import BookList from './components/BookList'
import MyData from './context/BookContext';

function App() {
  return (
    <div>
      <MyData>
        <BookList />
      </MyData>
    </div>
  );
}

export default App;
