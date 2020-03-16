import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import { Typography, TextField } from '@material-ui/core'

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

const Chat = ({ classes }) => {
  const [messages, setMessages] = useState([
    'Welcome to the SEDP program',
    'Hello world',
    'Foo bar'
  ])

  const onKeyDown = event => {
    // event.keyCode = enter
    if (event.keyCode === 13) {
      const newMessages = [...messages, event.target.value]
      setMessages(newMessages)
    }

    if (event.keyCode === 8) {
      console.log('delete')
      if (!event.target.value || event.target.value === '') {
        const newMessages = [...messages]
        newMessages.splice(newMessages.length - 1, 1)
        setMessages(newMessages)
      }
    }
  }
  return (
    <div className={classes.root}>
      <Typography variant='display1'>Chat</Typography>
      <Paper className={classes.paper}>
        <div className={classes.content}>
          {messages &&
            messages.map((message, index) => (
              <Typography key={index} variant='body1'>
                {message}
              </Typography>
            ))}
        </div>
        <TextField
          className={classes.textField}
          onKeyDown={onKeyDown}
          variant='filled'
          label='message'
        />
      </Paper>
    </div>
  )
}

Chat.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Chat)
