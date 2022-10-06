import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ fileName }) => {
  return (
    <Link to={`/catalog/${fileName}`}>
      <div className="card">
        <a href="#">
          <img src={`../../images/prewies/${fileName}.png`} alt="" />
        </a>
      </div>
    </Link>
  )
}

export default CategoryCard
