import ReactDOM from 'react-dom/client';
import App from './App/App';
import {AuthProvider} from './Context/Auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <App />
  </AuthProvider>
);
