import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
  }, [actions]);

  return (
    <div className="text-center mt-5">
      <h2>Characters:</h2>
      <ul>
        {store.people.map((person) => (
          <li key={person.uid}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
