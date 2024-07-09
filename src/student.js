import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Student() {

  const [student, setStudent] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(res => setStudent(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded'>
        <Link to="/create" className='btn btn-success'>Add</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              student.map((data, i) => (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student