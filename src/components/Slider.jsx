import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import Spinner from './Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap';

function Slider() {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, 'listing')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
      const querySnap = await getDocs(q)

      let fetchedListings = []

      querySnap.forEach((doc) => {
        fetchedListings.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setListings(fetchedListings)
      setLoading(false)
    }

    fetchListings()
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (listings.length === 0) {
    return null
  }

  return (
    <>
      <p className='exploreHeading'>Recommended</p>

      <Carousel>
        {listings.map(({ data, id }) => (
          <Carousel.Item key={id} onClick={() => navigate(`/category/${data.type}/${id}`)}>
            <div
              style={{
                maxHeight: "550px",
                maxWidth: "60%",
                margin: "0 auto",
                backgroundImage: `url(${data.imageUrls[0]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '400px', // Adjust the height as needed
              }}
              className='d-block w-100'
            >
              <Carousel.Caption >
                <h3>{data.name}</h3>
                <p>${data.discountedPrice ?? data.regularPrice} {data.type === 'rent' && '/ month'}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default Slider
