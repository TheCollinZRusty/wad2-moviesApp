import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import './SplashPage.css';

export default function SplashPage() {

  return (
<div class="code">
  <header class="content">
    <h1 class="title">The Movie Database</h1>
    <div class="text">For the movie lovers</div>
  </header>
  <Link to="/home" class="footer">
    <a href="#" class="ripple">Enter</a>
  </Link>
  <div class="wave"></div>
  <div class="wave wave2"></div>
  <div class="wave wave3"></div>
</div>
  )
}