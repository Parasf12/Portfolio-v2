import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:admin@abhaypp.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:admin@abhaypp.com">Admin@abhaypp.com</a>
        </div>
        <div>
        <a href="tel:+91"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+91">(+91) Not available</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
