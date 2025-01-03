import React, { useState } from 'react';
import {
  FormWrap,
  FormContent,
  Form,
  FormLabel,
  FormRow,
  HalfWidthInput,
  FormTextArea,
  FormButton,
  Text,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
} from './FormElement.js';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmissionStatus, setFormSubmissionStatus] = useState('');

  const { name, email, message } = formData;

  /*
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
  */

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the data that will be sent
    console.log('Transmitting data:', {
    'form-name': 'contact',
    ...formData,
    });

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setFormSubmissionStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        setFormSubmissionStatus('Form submission failed. Please try again later.');
      });
  };

  return (
    <>
      <InfoContainer lightBg={true} id="contact">
        <InfoWrapper>
          <InfoRow imgStart={false}>
            <Column1>
              <TextWrapper>
                <Heading>Contact Us</Heading>
                <Subtitle>
                At Technexus, we're dedicated to making your tech shopping experience smooth, efficient, and personalized. Whether you have questions about our products, need support with your order, or want to share feedback, we're here to help.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <FormWrap>
                <FormContent>
                  <Form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don't fill this out: <HalfWidthInput name="bot-field" onChange={handleChange} />
                      </label>
                    </p>
                    <FormRow>
                      <FormLabel htmlFor="name">
                        Name
                        <HalfWidthInput
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          required
                        />
                      </FormLabel>
                      <FormLabel htmlFor="email">
                        Email
                        <HalfWidthInput
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          required
                        />
                      </FormLabel>
                    </FormRow>
                    <FormLabel htmlFor="message">
                      Message
                      <FormTextArea id="message" name="message" value={message} onChange={handleChange} required />
                    </FormLabel>
                    <FormButton type="submit">SUBMIT</FormButton>
                    {formSubmissionStatus && <Text>{formSubmissionStatus}</Text>}
                  </Form>
                </FormContent>
              </FormWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ContactForm;
