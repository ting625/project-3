import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElements';

export const SignIn = () => {
    const history = useHistory(); // Get history from react-router-dom
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [formSubmissionStatus, setFormSubmissionStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Log the email and password for the developer to check
        console.log('Email:', email);
        console.log('Password:', password);

        // Send data to API
        fetch('/api/signin', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
          })
            .then(() => {
              setFormSubmissionStatus('Form submitted successfully!');
            })
            .catch((error) => {
              console.error(error);
              setFormSubmissionStatus('Form submission failed. Please try again later.');
            });


        // Redirect to Order Confirmation Page
        history.push('/order-confirmation');
    };

    return (
        <Container>
            <FormWrap>
                <Icon to="/">Login for Confirm Order</Icon>
                <FormContent>
                    <Form onSubmit={handleSubmit}> {/* Handle form submission */}
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            required 
                        />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                            required 
                        />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn;
