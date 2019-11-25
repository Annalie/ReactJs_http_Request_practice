import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class UpdateArtistDialog extends Component {

    constructor(props){
        super(props);    
        this.state = {
            lastName: '',
            nationality: ''
        }
    }

    changeHandler = event => {
      
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            ...this.state.artist,
            [name]: value
        });
    }

    render() {
        return (
            <form className="update_artists_dialog"
                 style={updateArtistsDialog}>
                
                <div className="modal_title"  style={modalTitle}>
                    Update Artist
                </div>

                <TextField
                        style={last_name}
                        name="lastName" 
                        value={this.state.lastName} 
                        onChange={this.changeHandler}
                        label="LastName" />

                <TextField 
                        style={nationality}
                        name="nationality" 
                        value={this.state.nationality} 
                        onChange={this.changeHandler}
                        label="Nationality" />

                <Button color="primary"
                    style={cancel_btn}
                    onClick={this.props.cancel.bind(this)}>Cancel</Button>

                <Button color="primary"
                    style={update_btn}
                    onClick={this.props.updateArtist.bind(this, this.props.id, 
                    this.state.lastName,
                    this.state.nationality)}>Add </Button>

            </form>
        )
    }
}

const updateArtistsDialog = {
    position: 'absolute',
    backgroundColor: 'white',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    margin: 'auto',
    width: "600px",
    height: "150px",
    padding: "20px",
    zIndex: "5",
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display:'grid',
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "25px",
    gridRowGap: "15px",
    gridTemplateRows: "min-content min-content min-content min-content",
    gridTemplateAreas: 
        '"modalTitle modalTitle"'+
        '"lastName nationality"'+
        '"cancelBtn updateBtn"'
}

const modalTitle = { 
    gridArea : "modalTitle",
    fontSize: "24px",
    color: '#3c3131',
    alignSelf: "center"
}

const last_name= {gridArea : "lastName"}
const nationality =  {gridArea : "nationality"}
const cancel_btn  = {gridArea : "cancelBtn"}
const update_btn = {gridArea : "updateBtn"}