import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const HeroForm = () => {

  const onFinish = (values) => {
    console.log("Success:", values);
    alert("Submitted successfully");
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    alert("Error");
  };

  const onFinishh = (values) => {
    console.log("Success:", values);
    alert("Submitted successfully");

    let databody = {
      "name": values.name,
      "email": values.email
  }

    return fetch('http://localhost:4000/', {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
  };


  return (
    <div className="hero-form">
      <Form
        method="post"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            { whitespace: true },
            { min: 3 },
          ]}
        >
          <Input
            className="input"
            id="name"
            type="name"
            name="name"
            placeholder="Enter Your Name"
          />
        </Form.Item>
        <br />

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            { type: "email" },
          ]}
        >
          <Input
            className="input"
            id="email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
        </Form.Item>
        <br />

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="hero-form-button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HeroForm;
