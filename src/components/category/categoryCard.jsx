import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ fileName }) => {
  const imgUrl=`http://m977726h.beget.tech/images/eshop/${fileName}.png`
  return (
    <Link to={`/catalog/${fileName}`}>
      <div className="card">
          <img src={imgUrl} alt="" />
          {/* <img src={`../../images/prewies/${fileName}.png`} alt="" /> */}
      </div>
    </Link>
  )
}

export default CategoryCard
