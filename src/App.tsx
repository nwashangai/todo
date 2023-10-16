import './App.css';
import TodoPage from './pages/Todo';
import TodoProvider from './providers/Todo';

function App() {
  return (
    <TodoProvider>
      <TodoPage />
    </TodoProvider>
  );
}

export default App;
