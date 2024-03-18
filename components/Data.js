import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "./UserSlice";

export default function Data({ children }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      dispatch(setData(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, [data, getData]);
  console.log(data);

  if (data) {
    return children;
  }
}
