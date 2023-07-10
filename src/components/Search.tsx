import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../styles/components.css";
import { toast } from "react-toastify";
import { store } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

const Search = () => {
  const [location, setLocation] = useState("");
  const [hospitals, setHospitals] = useState<any | []>([]);

  const handleLocationChange = (event: { target: { value: any } }) => {
    setLocation(event.target.value);
  };

  const handleSearch = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const cityRef = collection(store, "hospitals");
      const doc = await getDocs(cityRef);

      const hospitalsData = doc.docs.map((doc) => doc.data());
      console.log("Hospitals data: ", hospitalsData);

      const filteredHospitals = hospitalsData.filter(
        (hospital) =>
          hospital.state &&
          hospital.state.toLowerCase().includes(location.toLowerCase())
      );

      if (filteredHospitals.length === 0 && location.length === 0) {
        console.log("Hospital not found!");
        toast.error("Hospital not found!");
      } else {
        console.log("Hospitals: ", filteredHospitals);
        setHospitals(filteredHospitals);
      }
    } catch (error) {
      console.log("Error fetching hospitals: ", error);
      toast.error("Error fetching hospitals");
    }
  };

  // const handleSearch = async (event: { preventDefault: () => void }) => {
  //   event.preventDefault();

  //   try {
  //     // Fetch hospitals based on the entered location
  //     const cityRef = collection(store, "hospitals");
  //     const doc = await getDocs(cityRef);

  //     const hospitalsData: any[] = []; // Create an empty array to store all the hospital data

  //     doc.forEach((doc) => {
  //       hospitalsData.push(doc.data()); // Add the current document data to the array
  //     });

  //     const filteredHospitals = hospitalsData.filter(
  //       (hospital: { location: string }) => hospital.location.includes(location)
  //     );

  //     if (filteredHospitals.length === 0) {
  //       console.log("Hospital not found!");
  //       toast.error("Hospital not found!");
  //     } else {
  //       console.log("Hospitals: ", filteredHospitals);
  //       setHospitals(filteredHospitals); // Set the hospitals state to the array of filtered data
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       toast.error(error.message);
  //       console.log(error);
  //     } else {
  //       toast.error("Error fetching hospitals");
  //     }
  //   }

  //   // try {
  //   //   // Fetch hospitals based on the entered location
  //   //   const cityRef = collection(store, "hospitals");
  //   //   const doc = await getDocs(cityRef);

  //   //   doc.forEach((doc) => {
  //   //     console.log(doc.data());
  //   //     setHospitals([doc.data()]);
  //   //   });

  //   //   // if (!doc) {
  //   //   //   console.log("Hospital not found!");
  //   //   //   toast.error("Hospital not found!");
  //   //   // } else {
  //   //   //   doc.forEach((doc) => {
  //   //   //     console.log("Document data:", doc.data());
  //   //   //     setHospitals([doc.data()]);
  //   //   //   });
  //   //   // }
  //   // } catch (error) {
  //   //   if (error instanceof Error) {
  //   //     toast.error(error.message);
  //   //     console.log(error);
  //   //   } else {
  //   //     toast.error("Error fetching hospitals");
  //   //   }
  //   // }
  // };

  return (
    <div>
      <div className="inputContainer">
        <form onSubmit={handleSearch}>
          <Icon
            icon="material-symbols:location-on-outline-rounded"
            width="25"
            height="25"
            style={{ alignSelf: "center", color: "#c1c1c1" }}
          />
          <input
            id="text"
            type="text"
            className="form-control"
            value={location}
            onChange={handleLocationChange}
            placeholder="Lagos"
          />
          <button
            type="submit"
            style={{
              border: "none",
              background: "none",
              color: "#08299b",
              cursor: "pointer",
            }}
          >
            <Icon icon="material-symbols:search" width="25" height="25" />
          </button>
        </form>
      </div>

      <ul>
        {hospitals.map(
          (hospital: {
            id: React.Key | null | undefined;
            name: string;
            address: string;
          }) => (
            <li key={hospital.id}>
              <span>{hospital.name}</span>
              <span>{hospital.address}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Search;
