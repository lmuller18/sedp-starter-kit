
import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import { Typography, TextField } from '@material-ui/core';

const styles = {
    boxStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        position: 'absolute'
    },
    root: {
        padding: 20
    },
    paper: {
        width: '100%',
        height: 600,
        marginTop: 20,
        position: 'relative',
        paddingTop: 10
    },
    textField: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
}

class Chat extends Component {
    static propTypes=  {
        classes: PropTypes.object
    }
    state = {
        messages: ['Welcome to the SEDP program', 'Hello world', 'Foo bar']
    }
    onKeyDown = (event) => {
        // event.keyCode = enter
        if (event.keyCode === 13) {
            const newMessages = [...this.state.messages]
            newMessages.push(event.target.value)
            this.setState({
                messages: newMessages
            })
        } 
        
        if (event.keyCode === 8) {
            console.log('delete')
            if(!event.target.value || event.target.value === ''){
                const newMessages = [...this.state.messages]
                newMessages.splice(newMessages.length - 1, 1)
                this.setState({
                    messages: newMessages
                })
            }
        }
    }
    render() {
        return (<div className={this.props.classes.root}>
            <Typography variant="display1">Chat</Typography>
            <Paper className={this.props.classes.paper}>
                <div className={this.props.classes.content}>
                    {this.state.messages && this.state.messages.map((message, index) => (<Typography key={index} variant='body1'>{message}</Typography>))}
                </div>
                <TextField className={this.props.classes.textField} onKeyDown={this.onKeyDown} variant='filled' label='message'/>
            </Paper>
        </div>
        );
    }
}

export default withStyles(styles)(Chat);
