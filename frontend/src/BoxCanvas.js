import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

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
    position: 'relative'
  }
}

const BoxCanvas = ({ classes }) => {
  const [location, setLocation] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  const onMouseDown = event => {
    console.log('onMouseDown', event)
    setIsMoving(true)
  }
  const onMouseUp = event => {
    console.log('onMouseUp', event)
    setIsMoving(false)
  }
  const onMouseMove = event => {
    if (isMoving) {
      event.persist()
      console.log('onMoveMove', event, event.movementX, event.movementY)
      setLocation(location => ({
        x: location.x + event.movementX,
        y: location.y + event.movementY
      }))
    }
  }
  return (
    <div className={classes.root}>
      <Typography variant='display1'>Canvas</Typography>
      <Paper
        className={classes.paper}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <div
          className={classes.boxStyle}
          onMouseDown={onMouseDown}
          style={{ left: location.x, top: location.y }}
        />
      </Paper>
    </div>
  )
}

BoxCanvas.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(BoxCanvas)
