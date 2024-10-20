import React from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
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
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn;
