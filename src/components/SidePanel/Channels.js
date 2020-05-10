import React from 'react';
import {Menu, Icon, Modal, Form, Input, Button} from 'semantic-ui-react';

class Channels extends React.Component {
    state = {
        channels: [],
        channelName: "",
        channelDetails: "",
        modal: false
    }

    closeModal = () => this.setState({ modal:false });

    openModal = () => this.setState({ modal:true });

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {

        const {channels} = this.state

        return (
            <React.Fragment>
                <Menu.Menu stype={{paddingBottom: '2em'}}>
                    <Menu.Item>
                        <span>
                            <Icon name="exchange" /> Channels
                        </span>{" "}
                        ({channels.length}) <Icon name="add" onClick={this.openModal}/>
                    </Menu.Item>
                    {/*Channels*/}
                </Menu.Menu>

                <Modal basic open={modal} onClose={this.closeModal}>
                    <Modal.Header>Add a Channel</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                            <Input 
                                    fluid
                                    label="Name of the Channel"
                                    name="channelName"
                                    onChange={this.handleChange}   
                                />
                            </Form.Field>

                            <Form.Field>
                            <Input 
                                    fluid
                                    label="About the Channel"
                                    name="channelDetails"
                                    onChange={this.handleChange}   
                                />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="green" inverted>
                            <Icon name="checkmark" /> Add
                        </Button>
                        <Button color="red" inverted>
                            <Icon name="remove" /> Cancel
                        </Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
 }

 export default Channels;