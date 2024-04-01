import React, { useContext } from "react";
import { Context } from "../store/appContext";
import MainCard from "../component/mainCard";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <MainCard data={store.people} imageUrlKey="characters" nameKey="name" />
    </div>
  );
};
