import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutingComponent from './component/Routing/RoutingComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <RoutingComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
