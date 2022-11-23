
import './App.css';
import Router from './Routes/Router/Router';
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router}>

      </RouterProvider>
    </div>
  );
}

export default App;
