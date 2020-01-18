import React from 'react';

import Layout from './components/Layout';
import StoriesList from './containers/StoriesList';
import './App.css';

function App() {
  return (
      <Layout>
        <StoriesList />
      </Layout>
  );
}

export default App;
