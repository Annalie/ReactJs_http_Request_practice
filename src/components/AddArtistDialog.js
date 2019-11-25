import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class AddArtistDialog extends Component {

    constructor(props){
        super(props);    
        this.state = {
            artist : {
                firstName: '',
                lastName: '',
                birthDate: "2000-05-24",
                nationality: ''
            }
        }
    }

    changeHandler = event => {
      
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          artist: {
              ...this.state.artist,
              [name]: value
          }
        });
    }

    render() {
        return (
            <form className="add_artists_dialog"
                 style={addArtistsDialog}>
                <div className="modal_title"  style={modalTitle}>
                    Add Artist
                </div>
         
                <TextField
                        style={first_name}
                        name="firstName" 
                        value={this.state.artist.firstName} 
                        onChange={this.changeHandler}
                        label="Firstname" />

                <TextField
                        style={last_name}
                        name="lastName" 
                        value={this.state.artist.lastName} 
                        onChange={this.changeHandler}
                        label="LastName" />

                <TextField 
                        style={nationality}
                        name="nationality" 
                        value={this.state.artist.nationality} 
                        onChange={this.changeHandler}
                        label="Nationality" />
                
                <TextField
                        label="Birth Date:"
                        type="date"
                        name="birthDate"
                        value={this.state.artist.birthDate}
                        style={birth_date}
                        onChange={this.changeHandler}
                        InputLabelProps={{
                        shrink: true,
                        }}/>

                <Button color="primary"
                    style={cancel_btn}
                    onClick={this.props.cancelAdd.bind(this, false)}>Cancel</Button>

                <Button color="primary"
                    style={add_btn}
                    onClick={this.props.addArtist.bind(this, this.state.artist)}>Add </Button>
          
            </form>
        )
    }
}


const addArtistsDialog = {
    position: 'absolute',
    backgroundColor: 'white',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    margin: 'auto',
    width: "600px",
    height: "250px",
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
        '"firstName lastName"'+
        '"nationality birthDate"'+
        '"cancelBtn addBtn"'
}

const modalTitle = { 
    gridArea : "modalTitle",
    fontSize: "24px",
    color: '#3c3131',
    alignSelf: "center"
}

const first_name = {gridArea : "firstName"}
const last_name= {gridArea : "lastName"}
const nationality =  {gridArea : "nationality"}
const birth_date = {gridArea : "birthDate"}
const cancel_btn  = {gridArea : "cancelBtn"}
const add_btn = {gridArea : "addBtn"}