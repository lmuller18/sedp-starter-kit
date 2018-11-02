
import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core';

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

class BoxCanvas extends Component {
    static propTypes=  {
        classes: PropTypes.object
    }
    state = {
        isMoving: false,
        x: 0,
        y: 0
    }
    onMouseDown = (event) => {
        console.log('onMouseDown', event)
        this.setState({
            isMoving: true
        })
    }
    onMouseUp = (event) => {
        console.log('onMouseUp', event)
        this.setState({
            isMoving: false
        })
    }
    onMoveMove = (event) => {
        if(this.state.isMoving){
        console.log('onMoveMove', event, event.movementX, event.movementY)
        this.setState({
                x: this.state.x + event.movementX,
                y: this.state.y + event.movementY
            })
        }
    }
    render() {
        return (<div className={this.props.classes.root}>
            <Typography variant="display1">Canvas</Typography>
            <Paper 
                className={this.props.classes.paper}
                onMouseMove={this.onMoveMove}
                onMouseUp={this.onMouseUp}
                >
                    <div 
                        className={this.props.classes.boxStyle}
                        onMouseDown={this.onMouseDown}
                        style={{left: this.state.x, top: this.state.y}}
                    />
            </Paper>
        </div>
        );
    }
}

export default withStyles(styles)(BoxCanvas);
