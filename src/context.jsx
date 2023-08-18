import React, { useContext, useReducer, useEffect } from "react";
import { ReactPropTypes } from "react";
import PropTypes from "prop-types";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "";

const intialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Aditya Nath",
<<<<<<< HEAD
        image: "/images/hero_section.svg",
=======
        image: "https://raw.githubusercontent.com/Hero777-tech/dep-tst/a71d069b96085ff7b429f8a6a01f31cac0150776/public/images/hero_section.svg",
>>>>>>> 1eb4478 (update2ndversion)
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Dhruv Roy",
<<<<<<< HEAD
        image: "./images/about_section.svg",
=======
        // image: "./images/about_section.svg",
        image : "https://raw.githubusercontent.com/Hero777-tech/dep-tst/a71d069b96085ff7b429f8a6a01f31cac0150776/public/images/about_section.svg",
>>>>>>> 1eb4478 (update2ndversion)
      },
    });
  };

  //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
