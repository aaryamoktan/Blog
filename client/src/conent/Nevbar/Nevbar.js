import React from 'react'
import { Link } from 'react-router-dom'
const Nevbar = () => {
  return (
   <>
    <nav class="navbar navbar-expand-lg navbar-light ">
  <Link class="navbar-brand" to="/">Blog</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item ">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/features">Features</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/">Pricing</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " href="#">Disabled</Link>
      </li>
    </ul>
  </div>
</nav>
   </>
  )
}

export default Nevbar