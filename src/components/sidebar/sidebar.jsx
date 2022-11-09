import React, { useState, useCallback, useEffect, useRef } from 'react'
import axios from 'axios'
import MultiRange from './multiRange'

const Sidebar = () => {
  const [minPrice, setMinPrice] = React.useState(0) 
  const [minPieces, setMinPieces] = React.useState(0) 
  const [minMinifigs, setMinMinifigs] = React.useState(0) 
  const [minYear, setMinYear] = React.useState(0) 
  const [maxPrice, setMaxPrice] = React.useState(0) 
  const [maxPieces, setMaxPieces] = React.useState(0) 
  const [maxMinifigs, setMaxMinifigs] = React.useState(0) 
  const [maxYear, setMaxYear] = React.useState(0) 



  useEffect(() => {
    // получаем MAX цену
    axios.get(`http://localhost:3001/products?_sort=price&_order=desc&_start=0&_limit=1`).then((res) => {
      setMaxPrice(parseInt(res.data[0].price))
    })
    // получаем MAX количество деталей
    axios.get(`http://localhost:3001/products?_sort=pieces&_order=desc&_start=0&_limit=1`).then((res) => {
      setMaxPieces(parseInt(res.data[0].pieces))
    })
    // получаем MAX количество минифигурок
    axios.get(`http://localhost:3001/products?_sort=minifigs&_order=desc&_start=0&_limit=1`).then((res) => {
      setMaxMinifigs(parseInt(res.data[0].minifigs))
    })
    // получаем MAX год
    axios.get(`http://localhost:3001/products?_sort=year&_order=desc&_start=0&_limit=1`).then((res) => {
      setMaxYear(parseInt(res.data[0].year))
    })
    // получаем MIN цену
    axios.get(`http://localhost:3001/products?_sort=price&_start=0&_limit=1`).then((res) => {
      setMinPrice(parseInt(res.data[0].pieces))
    })
    // получаем MIN количество деталей
    axios.get(`http://localhost:3001/products?_sort=pieces&_start=0&_limit=1`).then((res) => {
      setMinPieces(parseInt(res.data[0].pieces))
    })
    // получаем MIN количество минифигурок
    axios.get(`http://localhost:3001/products?_sort=minifigs&_start=0&_limit=1`).then((res) => {
      setMinMinifigs(parseInt(res.data[0].minifigs))
    })
    // получаем MIN год
    axios.get(`http://localhost:3001/products?_sort=year&_start=0&_limit=1`).then((res) => {
      setMinYear(parseInt(res.data[0].year))
    })
  }, [])

  return (
    <>
      <div className="sidebar__top">111</div>
      <div className="sidebar-form__wrapper">
        <form>
          <MultiRange label='Цена, руб.' min={minPrice} max={maxPrice} />
          <MultiRange label='Количество деталей, шт.' min={minPieces} max={maxPieces} />
          <MultiRange label='Количество минифигурок, шт.' min={minMinifigs} max={maxMinifigs} />
          <MultiRange label='Год выпуска' min={minYear} max={maxYear} />

          <button className="sidebar-form__btn">Применить фильтр</button>
        </form>
      </div>
    </>
  )
}

export default Sidebar
