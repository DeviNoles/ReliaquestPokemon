import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams
} from "react-router-dom";

import { createUseStyles } from 'react-jss';
import { LayoutProvider } from '../contexts';
import { Nav } from '../components';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import { ListPage, Home, Modal } from '../screens';

function ModalSwitch() {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background:any = location.state && location.state.background;
  const classes = useStyles();
  return (
    
    <div className={classes.content}>
    <div className={classes.scrollableArea}>
    <Nav />

      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<ListPage />} />
        <Route path="/pokemon/:id" element={<Modal />} />
      </Routes>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/pokemon/:id" element={<Modal />} />}

    </div>
    </div>
  );
}


function App() {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <LayoutProvider>
        <div className={classes.root}>
          <BrowserRouter>
         <ModalSwitch/>
          </BrowserRouter>
        </div>
      </LayoutProvider>
    </ApolloProvider>
  );
}

const useStyles = createUseStyles(
  {
    root: {
      background: '#171E2b',
      minHeight: '100vh',
      minWidth: '100vw',
      height: '100%',
      width: '100%',
      display: 'flex',
    },
    content: {
      flex: '1',
      overflow: 'hidden',
      position: 'relative',
    },
    scrollableArea: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
    },
  },
  { name: 'App' }
);

export default App;
