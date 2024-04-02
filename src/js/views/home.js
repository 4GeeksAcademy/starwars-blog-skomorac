import React, { useContext } from "react";
import { Context } from "../store/appContext";
import MainCard from "../component/mainCard";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="text-center mt-5 bg-dark">
      <MainCard data={store.people} imageUrlKey="characters" nameKey="name" />
      {/* <MainCard data={store.vehicles} imageUrlKey="vehicles" nameKey="name" />
      <MainCard data={store.planets} imageUrlKey="planets" nameKey="name" /> */}
    </div>
  );
};
