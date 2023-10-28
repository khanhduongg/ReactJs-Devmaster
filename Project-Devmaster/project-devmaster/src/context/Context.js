import { createContext, useState } from "react";
export const context = createContext();

const ContextProvider = ({ children }) => {
  //State

  const [responseData, setResponseData] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [data, setData] = useState(() => {
    const list = JSON.parse(localStorage.getItem("wishlistItems"));
    if (list === null || list.length === 0) {
      return responseData;
    }
    return list;
  });
  const value = {
    responseData,
    setResponseData,
    data,
    setData,
    setValueSearch,
    valueSearch,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
