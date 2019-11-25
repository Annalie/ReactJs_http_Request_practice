import React, { Component } from 'react'
import axios from 'axios';

// Imports React Components
import Fab from '@material-ui/core/Fab';

// Imports the component for display them
import ArtistCard from '../components/ArtistCard'
import AddArtistDialog from '../components/AddArtistDialog'
import UpdateArtistDialog from '../components/UpdateArtistDialog'

export default class ArtistsListPage extends Component {

    constructor(props){
        super(props);    
        this.state = {
            artists: [],
            showAddArtistDialog : false,
            idToArtistToUpdate: '',
            showUpdateArtistDialog: false
        }
    }

    /**
     * Function used to add artist.
     */
    addArtist = (artist) => {
        // TODO question 2
    }

    /**
     * Function used to delete artist.
     */
    deleteArtistById = (artistId) => {
        // TODO question 3
    }

    /**
     * Function used to add artist.
     */
    updateArtist = (artistId, newLastName, newNationality) => {
        // TODO question 4
    }


    showAddDialog = () =>{
        this.setState({ showAddArtistDialog : true})
    }

    closeAddModale = () =>{
        this.setState({ showUpdateArtistDialog : false})
    }

    showUpdateArtistDialogChangeState = (artistId) =>{
        this.setState({ showUpdateArtistDialog : true, idToArtistToUpdate: artistId})
    }

    closeUpdateModale = () =>{
        this.setState({ showUpdateArtistDialog : false})
    }
    
    render() {

        const artistsList = this.state.artists.map(artist =>
            <ArtistCard 
                key={artist._id}
                id={artist._id}   
                firstName={artist.firstName}  
                lastName={artist.lastName}  
                nationality={artist.nationality} 
                birthDate={artist.birthDate} 
                updateById={this.showUpdateArtistDialogChangeState} 
                deleteArtistById={this.deleteArtistById}/>);

        const addArtistDialog = this.state.showAddArtistDialog ?
            <AddArtistDialog cancelAdd={this.closeAddModale}
                            addArtist={this.addArtist} /> : null;
    
        const updateArtistDialog = this.state.showUpdateArtistDialog ?
            <UpdateArtistDialog  id={this.state.idToArtistToUpdate}  
                        cancel={this.closeUpdateModale}
                        updateArtist={this.updateArtist} /> : null;

        return (
            <div className='artits_list_page' style={artistsListPageStyle}>  
                <div className="instruction_content" style={instructionContent}>
                    <div className="title_instruction">
                        Instructions Exercice 1 :
                    </div>
                    <div className="instructions">
                        <ol>
                        <li style={liStyle}>Fetch all the artists with an HTTP Request. This
                            request has to be done when the page is created. Save the 
                            list of artists in the 'artists' variable.
                        </li >
                        <li style={liStyle}>Complete the function add artist. When the request has been received,
                            the new movie should appear. Click on the add button for test your code.
                        </li>
                        <li style={liStyle}>
                            Complete the function delete artist by Id. When the request has been received
                            the list should update.
                        </li>
                        <li style={liStyle}>
                            Complete the function update artist by Id. When the request has been received
                            the list should update.
                        </li>
                        </ol>
                    </div>
                </div> 

                <div className='title_page' style={titlePage}>Artists</div>
                <Fab color="primary" 
                     size="small" 
                     style={addArtistBtn}
                     onClick={this.showAddDialog} 
                     aria-label="add">
                    +
                </Fab>

                <div className='result_part' style={resultPart}>
                    {artistsList}
                    { addArtistDialog}
                    {updateArtistDialog}
                </div>
            </div>
        )
    } 
}


const artistsListPageStyle = {
    height: '100%',
    display:'grid',
    gridTemplateColumns: '1fr 2fr 65px',
    gridTemplateRows: '50px 1fr',
    gridTemplateAreas: "'instruction titlePage addBtn' 'instruction artistsList artistsList'"
}

const instructionContent = {
    gridArea: 'instruction',
    padding: '20px',
    backgroundColor: '#e8e5dd'
}

const liStyle = {
    paddingBottom: '10px'
}

const titlePage = {
    alignSelf: 'center',
    textAlign: 'center',
    gridArea: 'titlePage',
    fontSize: '24px',
    color: '#3c3131'
}

const addArtistBtn = {
    gridArea: 'addBtn',
    alignSelf: 'center'
}
  
const resultPart = {
    gridArea: 'artistsList',
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    justifyItems: 'center',
    gridColumnGap: '10px',
    gridRowGap: '15px'
}