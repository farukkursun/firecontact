// import React, { useState } from "react";

import { Button, Form, FormGroup } from "react-bootstrap";



const NevForm = ({
  add,
  username,
  setUserName,
  phoneNumber,
  setPhoneNumber,
  gender,
  setGender,
  handelSubmit,
}) => {
  return (
    <div>
      <div className="addcontact">ADD CONTACT</div>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            type="text"
            placeholder="username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            value={phoneNumber}
            placeholder="phonenumber"
          />
        </Form.Group>
        <FormGroup>
          <Form.Select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            aria-label="Default select example"
          >
            <option>gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </Form.Select>
        </FormGroup>

        <Button className="mt-4" variant="primary" type="submit">
          {add}
        </Button>
      </Form>
    </div>
  );
};

export default NevForm;
