import React from 'react'
import Weather from './Weather'
import Crypto from './Crypto'
import './apiWidgets.css'

export default function APIWidgets() {
  return (
    <div className='apiWidget'>
        <div className="apiWidgetItem">
        <span className="apiWidgetItemTitle">Weather</span>
        <Weather/>
        </div>

        <div className="apiWidgetItem">
        <span className="apiWidgetItemTitle">Crypto Widget</span>
        <Crypto/>
        </div>

        <div className="apiWidgetItem">
        <span className="apiWidgetItemTitle">Weather</span>
        <Weather/>
        </div>
    </div>
  )
}
