import React from 'react'
import { google, slack, dropbox } from './imports';
import './brand.css'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
  </div>
  )
}

export default Brand