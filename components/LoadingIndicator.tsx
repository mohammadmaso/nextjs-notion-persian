import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../public/loading_spinner_network.json'

const LoadingIndicator = () => {
  return (
    <>
      <Lottie
        options={{
          animationData: animationData,
          autoplay: true,
          loop: true
        }}
        height={200}
        width={200}
      />
    </>
  )
}

export default LoadingIndicator
