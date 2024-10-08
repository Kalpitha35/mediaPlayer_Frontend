import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/feature1.jpeg'
import feature2 from '../assets/feature2.avif'
import feature3 from '../assets/feature3.avif'




const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* landing head */}
      <div className="row aligm-items-center">
        <div className="col-lg-5">
          <h3>Welcome To <span className='text-warning'>Media Player</span> </h3>
          <p style={{textAlign:'justify'}} className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur repellat in fugiat. Fugit modi voluptatibus praesentium adipisci. Minima explicabo dicta, voluptates dignissimos ut magni eum aut fuga, architecto cum expedita.</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img style={{width:'450px', height:'450px'}} className='img-fluid ms-5' src={landingImg} alt="" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card style={{ width: '20rem' }} className='p-5'>
      <Card.Img style={{height:'250px'}} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title style={{fontSize:'20px'}}>Managing Videos</Card.Title>
        <Card.Text>
          Users can upload, view and remove the videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

          <div className="col-lg-4">
          <Card style={{ width: '20rem' }} className='p-5'>
      <Card.Img style={{height:'250px'}} variant="top" src={feature2} />
      <Card.Body>
        <Card.Title style={{fontSize:'20px'}}>Categorise Videos</Card.Title>
        <Card.Text>
          Users can categorise the videos by drag and drop features.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

          <div className="col-lg-4">
          <Card style={{ width: '20rem' }} className='p-5'>
      <Card.Img style={{height:'250px'}} variant="top" src={feature3} />
      <Card.Body>
        <Card.Title style={{fontSize:'20px'}} >Managing History</Card.Title>
        <Card.Text>
          Users can manage the watch history of all videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}> <span className="fs-5">Play Everything:</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum hic deserunt commodi asperiores 
          </p>
          <p style={{textAlign:'justify'}}> <span className="fs-5">categorise Videos:</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum hic deserunt commodi asperiores 
          </p>
          <p style={{textAlign:'justify'}}> <span className="fs-5">Managing History:</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum hic deserunt commodi asperiores 
          </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="497" height="360" src="https://www.youtube.com/embed/jxCRlebiebw" title="The GOAT (Official Trailer) Tamil: Thalapathy Vijay | Venkat Prabhu | Yuvan Shankar Raja | T-Series"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default Landing