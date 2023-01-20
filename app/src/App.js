import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import store from './helpers/state/store';
import router from './helpers/routes/router';
import './helpers/styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;