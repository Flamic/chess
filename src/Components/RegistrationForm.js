import { React, useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'

export default function RegistrationForm({show, onHide}) {
    const [state, setState] = useState({password: undefined, confirmPassword: undefined});

    function handleSubmit(event) {
      if (state.password !== state.confirmPassword) {
        alert("Password mismatch!");
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        alert("Successful registration!");
      }
    };

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setState({...state, [name]: value});
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Sign up and play for free!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form validated={state.validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="username-group">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            type="text"
                            placeholder="Enter username"
                            required
                            pattern="\w{3,20}"
                        />
                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            Latin letters, underscore or numbers (from 3 to 20)
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="email-group">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="password-group">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Enter reliable password"
                            required
                            pattern="\w{8,20}"
                            className="mb-2"
                            onChange={handleInputChange}
                        />
                        <Form.Control
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            required
                            pattern="\w{8,20}"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Latin letters, underscore or numbers (from 8 to 20)
                        </Form.Text>
                    </Form.Group>
                    <div className="float-right">
                        <Button
                            variant="secondary"
                            onClick={onHide}
                            className="mr-2"
                        >
                            Close
                        </Button>
                        <Button
                            variant="success"
                            type="submit"
                        >
                            Sign up
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

/*
export default function RegistrationForm({show, onHide}) {
    const [state, setState] = useState({validated: false, passwordValidated: false});

    function handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false
        || state.password === undefined
        || state.confirmPassword === undefined
        || state.password !== state.confirmPassword) {
        setState({...state, passwordValidated: (state.password === state.confirmPassword)});
        event.preventDefault();
        event.stopPropagation();
      }

      setState({...state, validated: true});
      alert("Successful registration!");
    };

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(state);
        setState({...state, [name]: value});
        console.log(state);
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Sign up and play for free!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={state.validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="username-group">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            type="text"
                            placeholder="Enter username"
                            required
                            pattern="\w{3,20}"
                            onChange={handleInputChange}
                        />
                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            Latin letters, underscore or numbers (from 3 to 20)
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="email-group">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            required
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password-group">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Enter reliable password"
                            required
                            pattern="\w{8,20}"
                            className="mb-2"
                            onChange={handleInputChange}
                        />
                        <Form.Control
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            required
                            pattern="\w{8,20}"
                            onChange={handleInputChange}
                            validated={state.passwordValidated}
                        />
                        <Form.Text className="text-muted">
                            Latin letters, underscore or numbers (from 8 to 20)
                        </Form.Text>
                    </Form.Group>
        <div className="float-right">
        <Button
            variant="secondary"
            onClick={onHide}
            className="mr-2"
        >
            Close
        </Button>
        <Button
            variant="success"
            type="submit"
        >
            Sign up
        </Button>
    </div>
</Form>
</Modal.Body>
</Modal>
)
}
*/