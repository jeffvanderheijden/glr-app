import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './helpers/state/store';
import AnimatedRouter from './helpers/navigation/Router';
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
      <BrowserRouter>
        <AnimatedRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;