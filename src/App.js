
import './App.css';
import ShopppingProducts from './ShopppingProducts';
import store from './store/store';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router';

function App() {
  return (
      <div>
          <Provider store={store}>
              <Outlet></Outlet>
          </Provider>
      </div>
  );
}

export default App;
