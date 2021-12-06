import React from 'react'

export default function Star({ starred }) {
  return (
    <div>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="30px"
        height="30px" viewBox="0 0 39.9 38.9">
        <g>
          <polygon fill={starred ? '#2CCD67' : 'transparent'} points="12.9,23.7 1.6,15.8 15.3,15.8 19.9,1.6 24.5,15.8 38.3,15.8 27,23.7 31.6,37.5 19.9,28.9 8.3,37.5" />
          <path fill={'#2CCD67'} d="M19.9,3.2l4,12.4l0.2,0.7h0.7h11.8L27,23.1l-0.6,0.4l0.2,0.7l4,12l-10.1-7.4l-0.6-0.4l-0.6,0.4L9.3,36.2l4-12
		l0.2-0.7l-0.6-0.4l-9.7-6.8h11.8h0.7l0.2-0.7L19.9,3.2 M19.9,0l-5,15.3H0l12.3,8.6l-5,14.9l12.6-9.3l12.6,9.3l-5-14.9l12.3-8.6
		H24.9L19.9,0L19.9,0z" />
        </g>
      </svg>
    </div>
  )
}
