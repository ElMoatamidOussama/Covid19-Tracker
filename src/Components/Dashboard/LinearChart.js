import React from "react";
import ReactApexChart from "react-apexcharts";
import { Form, Row, Col } from "react-bootstrap";
import CountriesISO2 from "../../Data/const/CountriesISO2";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
const LinearChart = (props) => {
  return (
    <div>
      <Snackbar
        id={"snackBar"}
        open={props.open}
        autoHideDuration={2000}
        onClose={props.handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={props.handleClose} severity="error">
          Sorry! No Data Found
        </Alert>
      </Snackbar>
      <Form>
        <Form.Group as={Row} id={"countryForm"} controlId="formPlaintextEmail">
          <Form.Label column sm="5">
            Choose Your Country:
          </Form.Label>
          <Col sm="6">
            <Form.Control as={"select"} onChange={props.handleClick}>
              {CountriesISO2.map((element) => (
                <option value={element.ISO2} key={element.ISO2}>
                  {element.Country}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>
      </Form>
      <ReactApexChart
        id={"mixedChart"}
        options={props.options}
        series={props.series}
        type="line"
      />
    </div>
  );
};

export default LinearChart;
