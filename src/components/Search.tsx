import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../styles/components.css";

const Search = () => {
  const [location, setLocation] = useState("");
  const [hospitals, setHospitals] = useState<any | []>([]);

  const handleLocationChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLocation(event.target.value);
  };

  const handleSearch = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      // Fetch hospitals based on the entered location
      const response = await fetch(`/api/hospitals?location=${location}`);
      const data = await response.json();
      setHospitals(data);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  return (
    <div style={{}}>
      <div className="inputContainer">
        <form onSubmit={handleSearch}>
          <Icon
            icon="material-symbols:location-on-outline-rounded"
            width="25"
            height="25"
            style={{ alignSelf: "center", color: "#c1c1c1" }}
          />
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={handleLocationChange}
            placeholder="Federal Medical Center, Ebutte Metta,Lagos State"
          />
          <button
            type="submit"
            style={{ border: "none", background: "none", color: "#08299b" }}
          >
            <Icon icon="material-symbols:search" width="25" height="25" />
          </button>
        </form>
      </div>

      <ul>
        {hospitals.map(
          (hospital: {
            id: React.Key | null | undefined;
            name:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined;
            address:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined;
          }) => (
            <li key={hospital.id}>
              <span>{hospital.name}</span>
              <span>{hospital.address}</span>
              {/*  Display other hospital details  */}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Search;
