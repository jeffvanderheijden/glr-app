import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import store from './helpers/state/store';
import router from './helpers/navigation/router';
import { ToastContainer, Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './helpers/styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        transition={Slide}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;