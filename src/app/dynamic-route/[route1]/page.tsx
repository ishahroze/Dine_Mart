import React from 'react'

function dynamicroute({params}:{params:{route1:number}}) {
  return (
    <div>this is dynamic route number {params.route1}</div>
  )
}

export default dynamicroute