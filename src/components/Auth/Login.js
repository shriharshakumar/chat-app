import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        email: '',
        password :'',
        errors: [],
        loading: false
    };

    handleChange = event => {

        this.setState({ [event.target.name]: event.target.value });

    }

    handleInputErrors = (errors, inputName) => {
        return errors.some(error => error.message.toLowerCase().includes(inputName)) ? "error" : ""
    }

    
    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)

    handleSubmit = event => {
        
        if(this.isFormValid(this.state)){
            event.preventDefault();
            this.setState({ errors:[], loading:true });

            firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(signedInUser => {
                console.log(signedInUser);
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    errors:this.state.errors.concat(err),
                    loading: false
                });
            })

        }
        
    }

    isFormValid = ({email, password}) => email && password;

    render() {
        const {email, password, errors, loading} = this.state;

        return(
            <Grid textAlign='center' verticalAlign='middle' className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="violet" textAlign="center">
                        <Icon name="code branch" color="violet"/>
                        Login to SlckChat
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                           
                            <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" onChange={this.handleChange} value={email} type="email" className={this.handleInputErrors(errors, 'email')}/>

                            <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" onChange={this.handleChange} value={password} type="password" className={this.handleInputErrors(errors, 'password')}/>
                     
                            <Button disabled={loading} className={ loading ? 'loading': ''}  color="violet" fluid zise="large">Login</Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    ) }
                    <Message>Don't have an account? <Link to="/Register">Register</Link> </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login;