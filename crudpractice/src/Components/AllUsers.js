import React, { useEffect, useState } from "react";
import { deleteApi, tableData } from "../Services/Api";
import EditForm from "./EditForm";
import { Link } from "react-router-dom";

const AllUsers = () => {
  //state table data..
  const [tData, setTdata] = useState([]);

  //calling api func tion in useEffect..
  useEffect(() => {
    tableDataApi();
  }, []);

  const tableDataApi = async () => {
    let response = await tableData();
    setTdata(response.data);
    console.log(response.data);
  };

  //delete..
  const deleteEvent = async (id) => {
    await deleteApi(id);
    tableDataApi();
  };

  return (
    <div>
      <table className="table container table-bordered table-dark mt-5">
        <thead>
          <tr className="text-center">
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td className="d-flex justify-content-center gap-2">
                  <Link to={`/edit/${item.id}`}>
                    <button
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEvent(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
