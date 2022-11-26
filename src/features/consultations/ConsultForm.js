import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Col } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { validateConsultForm } from '../../utils/validateConsultForm'


const ConsultForm = () => {
    const [modalOpen, setModalOpen] = useState(false)
    
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values)
        setModalOpen(false)
    }

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)} className='btn btn-light'>
                <i className='color-light'/> FREE CONSULTATION
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>FREE CONSULTATION</ModalHeader>
                <ModalBody>
                    <p>We know asking for help can be a big step. And you may have lots and lots of questions. Or you may just want to talk. Either way, we'd love to hear from you.<br /><br />Please fill out the form below and we will reach out to schedule a free 30-minute consultation with Milan. </p>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            phoneNum: '',
                            email: '',
                            contactType: 'By Phone',
                            feedback: ''
                        }}
                        onSubmit={handleSubmit}
                        validate={validateConsultForm}
                    >
                        <Form>
                            <FormGroup row>
                                <Label htmlFor='firstName' md='2'>
                                    First Name
                                </Label>
                                <Col md='10'>
                                    <Field className='form-control' name='firstName' placeholder='First Name'/>
                                    <ErrorMessage name='firstName'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastName' md='2'>
                                    Last Name
                                </Label>
                                <Col md='10'>
                                    <Field className='form-control' name='lastName' placeholder='Last Name'/>
                                    <ErrorMessage name='lastName'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='phoneNum' md='2'>
                                    Phone
                                </Label>
                                <Col md='10'>
                                    <Field className='form-control' name='phoneNum' placeholder='Phone'/>
                                    <ErrorMessage name='phoneNum'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md='2'>
                                    Email
                                </Label>
                                <Col md='10'>
                                    <Field className='form-control' name='email' placeholder='Email'/>
                                    <ErrorMessage name='email'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md='4'>
                                    Preferred method of communication:
                                </Label>
                                <Col md='8'>
                                    <Field className='form-control' name='contactType' as='select'>
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Field>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='feedback' md='3'>
                                    What's on your mind...
                                </Label>
                                <Col md='9'>
                                    <Field className='form-control' name='feedback' as='textarea' rows='12'/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col>
                                    <Button type='submit' color='secondary'>
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ConsultForm