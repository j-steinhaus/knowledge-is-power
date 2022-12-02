 import React from "react";
import { Button, Form, Grid, Segment, Image } from "semantic-ui-react";

// logging in 
const FormLogin = (props) => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size="large" action="/api/login" method="post">
        <Segment stacked>
          <Image
            className="fyblue"
            alt="logo"
            style={{
              height: "auto",
              width: "100%",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Form.Input
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
          />
          <Form.Input
            label="Password"
            type="password"
            placeholder="Password"
            name="password"
          />
          {props.error && (
            <p>
              {props.error}
            </p>
          )}
          <Button type="submit" onClick={props.handleSubmit}>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default FormLogin;