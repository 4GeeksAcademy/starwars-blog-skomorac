const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      peopleProperties: [],
      vehicles: [],
      vehicleProperties: [],
      planets: [],
      planetProperties: [],
      favorites: [],
    },

    actions: {
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

      getPeopleProperties: (uid) => {
        fetch(`https://www.swapi.tech/api/people/${uid}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({ peopleProperties: data.result });
            localStorage.setItem("starWarsData", JSON.stringify(getStore()));
          })
          .catch((err) => console.error(err));
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

      getVehicleProperties: (uid) => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({ vehicleProperties: data.result });
            localStorage.setItem("starWarsData", JSON.stringify(getStore()));
          })
          .catch((err) => console.error(err));
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

      getPlanetProperties: (uid) => {
        fetch(`https://www.swapi.tech/api/planets/${uid}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({ planetProperties: data.result });
            localStorage.setItem("starWarsData", JSON.stringify(getStore()));
          })
          .catch((err) => console.error(err));
      },
    },
  };
};

export default getState;
