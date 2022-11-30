
import './App.css';
import Router from './Routes/Router/Router';
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App container mx-auto">
      <RouterProvider router={Router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
