import { useState } from "react";

export default () => {
  const [data, setData] = useState<null | string>("");

  const createStore=()=> {
    return {data,setData,};
  }

  return {
    createStore,
  };
};
