import { Handle } from '@xyflow/react'
import React from 'react'

export default function SimpleNode({dragging,...props}) {
    // console.log(dragging)
    // console.log(props)
  return (
    <div className={`${dragging?"bg-transparent w-[100px] text-primary":"bg-primary w-[140px]"} duration-300  text-xl font-bold shadow rounded-3xl shadow-primary  flex items-center justify-center aspect-square `}>
      {!dragging&& "SimpleNode"}
    <Handle type="target" position="top" />
  <Handle type="source" position="right" id="a" />
  
    </div>
  )
}
