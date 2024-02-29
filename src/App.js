import { QueryClient, QueryClientProvider } from "react-query";

import Home from './components/home';

import './App.css';

function App() {
  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
      <Home />
      </QueryClientProvider>
  );
}

export default App;
