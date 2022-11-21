import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  useParams
} from "react-router-dom";
export const Modal = () => {
  const classes = useStyles();
  let history = useNavigate();
  let { id } = useParams();
  // let image = IMAGES[parseInt(id, 10)];

  // if (!image) return null;

  let back = (e: any) => {
    e.stopPropagation();
    history(-1);
  };
  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="root"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        {/* <h1>{image.title}</h1> */}
        <h1>test123</h1>
        {/* <Image color={image.color} /> */}
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: '100%',
      color: 'black'
    },
  },
  { name: 'Modal' }
);
