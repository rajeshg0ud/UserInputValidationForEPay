import React from 'react'
import { useSelector } from 'react-redux'

function Preview() {
  const userData= useSelector(store => store.userSlice.data);

  return (
    <div>
       <p>Name</p> <p>{userData.Name}</p>
       <p>Experience</p> <p>{userData.Experience}</p>
       <p>Age</p> <p>{userData.Age}</p>
       <p>Projects</p> <p>{userData.Projects}</p>
       <p>CollegeName</p> <p>{userData.CollegeName}</p>
       <p>JobRole</p> <p>{userData.JobRole}</p>
    </div>
  )
}

export default Preview