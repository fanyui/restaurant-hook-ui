import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createImage, uploadFile} from  '../api/menu'
import { getMenus } from '../api/menu'
import CardMenu from './CardMenu'
export default function RestaurantDetail(props) {
    const [processing, setProcessing] = useState(true)
    const [menus, setMenus] = useState([])
    const [showForm, showMenuForm] = useState(false)
    let { restaurantId } = useParams();

    useEffect(()=>{
        const fetchMenus = async () => {
            try {
                const result = await getMenus(props.auth.getIdToken(), restaurantId)
                setMenus(result)
            } catch (e) {
                alert('Could not fetch Restaurant Menus: ' + e.message)
            } finally {
                setProcessing(false)
            }
        }
        fetchMenus()

    },[restaurantId])

    useEffect(()=>{
        const fetchMenus = async () => {
            try {
                const result = await getMenus(props.auth.getIdToken(), restaurantId)
                setMenus(result)
            } catch (e) {
                alert('Could not fetch Restaurant Menus: ' + e.message)
            } finally {
                setProcessing(false)
            }
        }
        if(showForm === false){
            fetchMenus()
        }

    },[showForm])


    return(
        <div className="restaurant">
            {processing && <span> Fetching Menu for Today</span>}
            <div className="restaurant-menu">
                <button className="btn" onClick={()=> showMenuForm(!showForm)}
                > Add Menu
                </button>
            </div>
            {
            showForm
            ? 
                    <MenuForm auth={props.auth} show={showMenuForm}/>
            :
                    <div> <span>{menus.length}</span> <h2> All menus</h2> </div>
            }
            {menus.length> 0 && menus.map((item, key) => {
                return <CardMenu menu={item} auth={props.auth} />
            })}
        </div>
    )
}

function MenuForm(props){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [file, setFile] = useState("")
    const [uploadState, setUploadState] = useState("NoUpload")
    let { restaurantId } = useParams();
    const handleFileChange = (event) => {
        const files = event.target.files
        if (!files) return

        console.log('File change', files)
        setFile(files[0])
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            if (!file) {
                alert('File should be selected')
                return
            }

            setUploadState("UploadingData")
            const uploadInfo = await createImage(props.auth.getIdToken(),{
                restaurantId: restaurantId,
                title: title,
                description: description,
                price: price
            })

            console.log('Created image', uploadInfo)

            setUploadState("UploadingFile")
            await uploadFile(uploadInfo.uploadUrl,file)

            alert('Image was uploaded!')
        } catch (e) {
            alert('Could not upload an image: ' + e.message)
        } finally {
            setUploadState("NoUpload")
            props.show(false)
        }
    }
    return (
    <form className='create-form'>
        <label> Dish Name</label>
        <input className="input" type="text" onChange={(e) => setTitle(e.target.value)} name="title" /><br />
        <label>Price</label>
        <input className="input" type="text" onChange={(e) => setPrice(e.target.value)} name="price" /><br />
        <label> Description</label>
        <textarea placeholder='Description ...  ' onChange={(e) => setDescription(e.target.value)} className="textarea" maxLength={280} name="description" >
        </textarea> <br />
        <label> Image</label>
            <input
                type="file"
                accept="image/*"
                placeholder="Image to upload"
                onChange={handleFileChange}
            />        
        <button className="btn" onClick={handleSubmit}
                disabled={uploadState !=="NoUpload"} > {uploadState !== "NoUpload" ? "Processing ..." : "Submit"}</button>
    </form>
    )
}