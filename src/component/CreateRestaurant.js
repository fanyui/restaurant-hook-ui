import React, { useState, useEffect } from 'react'
import { createRestaurant } from '../api/restaurant'
import '../App.css'
function CreateRestaurant(props) {
    const [ description, setDescription] = useState("")
    const [ phone, setPhone] = useState("")
    const [ location, setLocation] = useState("")
    const [ uploadState, setUploadState] = useState("")
    const [ name, setName] = useState(false)
 
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!name || !location || !phone) {
                alert('Name, Phone and Location should be provided')
                return
            }

            setUploadState(true)
            
            const restaurant = await createRestaurant(props.auth.getIdToken(), {
                name,
                description,
                phone,
                location
            })

            console.log('Created description', restaurant)

            alert('restaurant was created!')
        } catch (e) {
            alert('Could not Create Restaurant an image: ' + e.message)
        } finally {
            setUploadState(false)
        }
    }

    return (
        <>
            <h3 className='center'> Add New Restaurant</h3>

            <form className='create-form'>
                <label> Restaurant Name</label>
                <input className="input" type="text" onChange={(e)=> setName(e.target.value)} name="name" /><br />
                <label>Contact Phone</label>
                <input className="input" type="text" onChange={(e) => setPhone(e.target.value)} name="phone" /><br />
                <label> Location</label>
                <input className="input" type="text" onChange={(e) => setLocation(e.target.value)} name="location" /> <br />
                <label> Description</label>
                <textarea placeholder='Description ...  ' onChange={(e) => setDescription(e.target.value)} className="textarea" maxLength={280} name = "description" >
                </textarea>
                <button className="btn"  onClick={ handleSubmit}
                    disabled={description === ''} > {uploadState? "Processing ..." : "Submit"}</button>
            </form>
        </>
    )
}

export default CreateRestaurant;