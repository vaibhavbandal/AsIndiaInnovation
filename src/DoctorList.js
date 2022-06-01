import { useState, useEffect } from "react";
import { doctor } from "./doctor";

export default function DoctorList(props) {
  const [doctors, setDoctors] = useState([]);
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    setDoctors(doctor);
    setTemp(doctor);
  }, []);

  const [search, setSearch] = useState("");
  const [special, setSpecial] = useState("Select");
  const [rate, setRate] = useState("Select");

  const handleSearch = (e) => {
    if (e.target.name === "search") setSearch(e.target.value);
    if (e.target.name === "special") setSpecial(e.target.value);
    if (e.target.name === "rate") setRate(e.target.value);
  };

  const handleCancelFilter = () => {
    setSpecial("Select");
    setRate("Select");
    setTemp(doctor);
  };

  const handleApplyFilter = () => {
    if (special === "Select" && rate === "Select") {
      handleCancelFilter();
      return;
    }

    if (special !== "Select" && rate !== "Select") {
      let temp1 = doctor.filter((value) => special === value.speciality);
      let temp2 = temp1.filter((value) => rate === value.rate.toString());
      setTemp(() => [...temp2]);
      return;
    }

    if (special !== "Select")
      setTemp(
        doctor.filter((value) => {
          return special === value.speciality;
        })
      );
    if (rate !== "Select")
      setTemp(
        doctor.filter((value) => {
          return rate === value.rate.toString();
        })
      );
  };

  return (
    <>
      <div className="container w-75  ">
        <div>
          <h6 className="d-flex justify-content-center p-3 bg-primary  border ">
            list of Doctors
          </h6>
        </div>
        <div className="row  px-4  ">
          <div className="col-sm-4 col border">
            <h6 className="text-center">Filter</h6>

            <div className="p-3">
              <>Specialist</>
              <select
                onChange={handleSearch}
                value={special}
                name="special"
                className="form-select"
              >
                <option>Select</option>
                <option>Ear</option>
                <option>Heart</option>
                <option>Teeth</option>
              </select>
            </div>
            <div className=" p-3">
              <>Rate</>
              <select
                onChange={handleSearch}
                value={rate}
                name="rate"
                className="form-select"
              >
                <option>Select</option>
                <option>300</option>
                <option>500</option>
                <option>800</option>
              </select>
            </div>
            <div className="p-3 d-flex justify-content-around">
              <button
                onClick={handleCancelFilter}
                className="btn btn-secondary"
              >
                Cancel Filter
              </button>
              <button onClick={handleApplyFilter} className="btn btn-primary">
                Apply Filter
              </button>
            </div>
          </div>

          <div className="col-sm-8 col border text-center table-wrapper-scroll-y my-custom-scrollbar ">
            <div className="p-3">
              <input
                className="form-control"
                type={"text"}
                name="search"
                onChange={handleSearch}
                placeholder="search by name, city or mobile"
              />
            </div>
            <table className="table table-borderless table-responsive table-striped table-hover   ">
              <thead className="position-sticky bg-primary">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Rate</th>
                  <th>Specialist</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                {temp.length === 0 ? <>Not Available </> : <></>}
                {temp.map((value, index) => {
                  if (
                    value.name.startsWith(search) ||
                    value.name.includes(search) ||
                    value.city.startsWith(search) ||
                    value.city.includes(search) ||
                    value.mobile.startsWith(search) ||
                    value.mobile.includes(search)
                  )
                    return (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{value.name}</td>
                          <td>{value.city}</td>
                          <td>{value.rate}</td>
                          <td>{value.speciality}</td>
                          <td>{value.mobile}</td>
                        </tr>
                      </>
                    );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
