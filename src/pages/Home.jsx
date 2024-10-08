import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

const Home = () => {

  // STATE LIFTING
  const [removeVideoResponseFromView,setRemoveVideoResponseFromView] = useState("")
  const [removeVideoResponseFromCategory,setRemoveVideoResponseFromCategory] = useState("")
  const [videoUploadResponse,setVideoUploadResponse] = useState("")// we use "" bcz we didn't know the type of response.
  return (
    <div style={{paddingTop :'100px'}}>
      <div className="container mt-5 d-flex justify-content-between">
        <Add setVideoUploadResponse={setVideoUploadResponse}/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          {/* share the state  to view by STATE LIFTING */}
          <View setRemoveVideoResponseFromView={setRemoveVideoResponseFromView} removeVideoResponseFromCategory={removeVideoResponseFromCategory} videoUploadResponse={videoUploadResponse}/>
        </div>
        <div className="col-lg-6">
          {/* share the state changing method to category by STATE LIFTING */}
          <Category removeVideoResponseFromView={removeVideoResponseFromView} setRemoveVideoResponseFromCategory={setRemoveVideoResponseFromCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Home