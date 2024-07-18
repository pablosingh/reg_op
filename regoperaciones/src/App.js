import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Head from './components/Head';
import Count from './components/Count';
import AddOp from './components/AddOp';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head/>
        App de Pablo
        <Count/>
        <AddOp/>
      </div>
    </Provider>
  );
};

export default App;
