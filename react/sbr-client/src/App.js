
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Home1 from './Home1';
import BookViews from './component/book/BookViews';


function App() {
  return (
    <div className="App">
      
      
        <Home1/>
        <BookViews/>
    </div>
  );
}

export default App;
