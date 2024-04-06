import React from 'react'


function SidebarOptions({text,Icon}) {
    console.log(Icon)
  return (
    <div className="sidebarOptions">
        {Icon && <Icon className='sidebarOptions_Icons'/>}
        {Icon?<h4>{text}</h4>:<p>{text}</p>}
    </div>
  )
}

export default SidebarOptions