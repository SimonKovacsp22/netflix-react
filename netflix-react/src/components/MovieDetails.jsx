import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import {ListGroup,Spinner} from 'react-bootstrap'

export default function MovieDetails() {

    const[isLoading,setIsLoading] = useState(true)

    const params = useParams()
    const [details,setDetails] = useState([])


    useEffect(()=>{
        if(isLoading===true){
             fetchDetails(url)
        }

    },[])

    let url ='http://www.omdbapi.com/?apikey=4f9077c5&i=' + params.movieId
    const fetchDetails = async (url) => {
          try{ const response = await fetch(url)
          if (response.ok) {
            setIsLoading(false)

            let data = await response.json()
            console.log(data)
            setDetails(data)
            
          }

          }
          catch(error) {
              console.log(error)
          }
    }
  return (
      <>
      {isLoading && <Spinner animation="border" variant="light" />}
      { !isLoading &&<ListGroup style={{width:'40vw',marginLeft:'50px',marginTop:'20px'}}>
        <ListGroup.Item><strong>Title:</strong> {details.Title}</ListGroup.Item>
      <ListGroup.Item><strong>Actors:</strong> {details.Actors}</ListGroup.Item>
      <ListGroup.Item><strong>Awards:</strong> {details.Awards}</ListGroup.Item>
      <ListGroup.Item><strong>Box Office:</strong> {details.BoxOffice}</ListGroup.Item>
      <ListGroup.Item><strong>Director:</strong> {details.Director}</ListGroup.Item>
    </ListGroup>}</>
    
  )
}
