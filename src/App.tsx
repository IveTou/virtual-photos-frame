import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WithFetchPhotoProps, withFetchPhotoFactory } from './presentation/main/factories/photo-factory';

interface Props extends WithFetchPhotoProps {
  children?: React.ReactNode;
}

function App(props: Props) {
  const { useGetData } = props

  const [data, error, loading] = useGetData('frame', { limit: 100, page: 1 })
  console.log('RES', [data, error, loading])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withFetchPhotoFactory(App);
