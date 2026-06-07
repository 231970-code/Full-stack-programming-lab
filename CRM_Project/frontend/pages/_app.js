import { AuthProvider } from '../context/AuthContext';
import { Toaster }      from 'react-hot-toast';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: { borderRadius: '8px', fontSize: '14px' }
        }}
      />
    </AuthProvider>
  );
}
