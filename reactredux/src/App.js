import { Provider } from 'react-redux';
import store from './store';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  return(
    <Provider store={store}>
      <div>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;