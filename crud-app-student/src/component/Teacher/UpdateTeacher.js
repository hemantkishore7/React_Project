import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
  const { data, teacher, setTeacher } = props;
  const history = useNavigate();

  function handleInput(e) {
    const update = teacher.map((d) =>
      d.name === data.name ? { ...d, [e.target.name]: e.target.value } : d
    );
    setTeacher(update);
    history("/teacher");
  }

  function handleUpdate(e) {
    e.preventDefault();
  }
  return (
    <div className="update-table" style={{ margin: "1rem" }}>
      <Form className="d-grid" style={{ margin: "1rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            name="name"
            value={data.name}
            required
            onChange={handleInput}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCourse">
          <Form.Control
            type="text"
            name="course"
            value={data.course}
            required
            onChange={handleInput}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBatch">
          <Form.Control
            type="text"
            name="batch"
            value={data.batch}
            required
            onChange={handleInput}
          ></Form.Control>
        </Form.Group>
        <Button
          onClick={handleUpdate}
          type="submit"
          className="btn btn-warning"
        >
          UPDATE
        </Button>
      </Form>
    </div>
  );
}
