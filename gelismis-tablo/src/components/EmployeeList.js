import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { EmployeeContext } from "../Context/EmployeeContext";
import AddForm from "./AddForm";
import Employee from "./Employee";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const { sortedEmployees } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  // employees te değişiklik olduğu zaman modal kapanacak
  useEffect(() => {
    handleClose();

    // modal kapandıktan sonra aşağıdaki fonksiyon devreye girecek
    return () => {
      handleShowAlert();
      setTimeout(() => {
        handleCloseAlert();
      }, 3000);
    };
  }, [sortedEmployees]);

  //pagination ile ilgili alan
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPages = Math.ceil(sortedEmployees.length / employeesPerPage);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert
        show={showAlert}
        variant="success"
        onClose={() => setShowAlert(false)}
      >
        Employee List successfully updated
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentEmployees={currentEmployees}
        sortedEmployees={sortedEmployees}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;

// sort((a,b) => a.name.localeCompare(b.name))
