import React from "react";
import { Table } from "react-bootstrap";
import { DeleteUser, useFetch } from "../../utils/firebase";
import { MdDelete, MdEdit } from "react-icons/md";

const NewTable = ({ showInForm }) => {
  const { istLoading, contactList } = useFetch();
  console.log(contactList);
  return (
    <div>
      <div className="contact">CONTACT</div>
      <Table striped bordered hover className="bg-white">
        <thead>
          <tr>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {istLoading ? (
            <tr>
              <td>loading</td>
            </tr>
          ) : contactList?.length === 0 ? (
            <tr>
              <td>No Result Found</td>
            </tr>
          ) : (
            contactList?.map((item, index) => (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.gender}</td>
                <td className="text-center" onClick={() => DeleteUser(item.id)}>
                  
                  <MdDelete />
                </td>
                <td
                  className="text-center"
                  onClick={() =>
                    showInForm(
                      item.id,
                      item.username,
                      item.phoneNumber,
                      item.gender
                    )
                  }
                >
                  
                  <MdEdit />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default NewTable;
