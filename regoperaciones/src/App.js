import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import AddOp from './components/AddOp';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddOp/>
      </div>
    </Provider>
  );
};

export default App;
