import { Component } from "react";
// import CustomCardsExample from "../../React-Bootstap/CardsRB";
// import { Button, Card, Form } from "react-bootstrap";
import Heading from "../../headings/headings";
import Form from "../../forms/forms";
// import style form "./Weather.module.css"








class Weather extends Component {
  state={
    temperature:"",
    city: "",
    country: "",

  }
  render() {
    return (
      <div>
      <div>
      <Heading/>
      </div>
      <div>
      <Form/>
      </div>
      </div>

    );
  }
}
export default Weather;
