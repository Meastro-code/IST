import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const BmiLayout = ()=>{
    
    return(
        <Card style={{width:'30rem',padding:'5rem',marginTop:'5rem'}} className="mx-auto">
            <Card.Title>BMI Calculator</Card.Title>
            <Form>
                <Form.Group style={{margin:'2rem'}} controlId="formBasicEmail">
                    <Form.Label className="float-start">Age</Form.Label>
                    <Form.Control type="email" placeholder="Enter your age"></Form.Control>
                    <Form.Text className="text-muted float-start">Age from 1 year old.</Form.Text>
                </Form.Group>
                <Form.Group style={{margin:'2rem'}} controlId="formBasicEmail">
                    <Form.Label className="float-start">Height</Form.Label>
                    <Form.Control type="email" placeholder="Enter your height"></Form.Control>
                    <Form.Text className="text-muted float-start">Height in meters.</Form.Text>
                </Form.Group>
                <Form.Group style={{margin:'2rem'}} controlId="formBasicEmail">
                    <Form.Label className="float-start">Weight</Form.Label>
                    <Form.Control type="email" placeholder="Enter your weight"></Form.Control>
                    <Form.Text className="text-muted float-start">Weight in kilograms.</Form.Text>
                </Form.Group>
                <Button variant="primary">Calculate</Button>
            </Form>
        </Card>
    );
}

export default BmiLayout;