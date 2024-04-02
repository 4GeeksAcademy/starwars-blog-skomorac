const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      people: [],
      vehicles: [],
      planets: [],
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadLocalData: () => {
        // Check if data exists in localStorage
        const storedData = localStorage.getItem("starWarsData");
        if (storedData) {
          // If data exists, set store from localStorage
          setStore(JSON.parse(storedData));
        } else {
          // If data doesn't exist, fetch it and save to localStorage
          getActions().getPeople();
          getActions().getVehicles();
          getActions().getPlanets();
        }
      },

      changeColor: (index, color) => {
        const store = getStore();
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
        setStore({ demo: demo });
      },

      getPeople: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people");
          const data = await response.json();
          setStore({ people: data.results });
          // Save data to localStorage
          localStorage.setItem("starWarsData", JSON.stringify(getStore()));
        } catch (error) {
          console.error("Error fetching people: -->", error);
        }
      },

      getVehicles: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/vehicles");
          const data = await response.json();
          setStore({ vehicles: data.results });
          // Save data to localStorage
          localStorage.setItem("starWarsData", JSON.stringify(getStore()));
        } catch (error) {
          console.error("Error fetching vehicles: -->", error);
        }
      },

      getPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets");
          const data = await response.json();
          setStore({ planets: data.results });
          // Save data to localStorage
          localStorage.setItem("starWarsData", JSON.stringify(getStore()));
        } catch (error) {
          console.error("Error fetching planets: -->", error);
        }
      },
    },
  };
};

export default getState;
