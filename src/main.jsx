import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Protf from "./Protf";

// const router = createBrowserRouter([
//   {
//     path: "/test2/",
//     element: <App/>,
//     children:[
//       {
//         path: "/test2/",
//         element:<Home/>
//       },
//       {
//         path: "/test2/about",
//         element:<About/>
//       },
//       {
//         path: "/test2/services",
//         element:<Services />
//       },
//       {
//         path: "/test2/contact",
//         element:<Contact />
//       },
//       {
//         path: "/test2/portfolio",
//         element:<Protf />
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      {/* <RouterProvider router={router}/> */}
      <AppProvider>
        <App /> {/* here we will update the path from root to non root as the file been stored not been considered as root */}
      </AppProvider>
    
  </React.StrictMode>
);
