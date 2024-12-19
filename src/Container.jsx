import React from "react"
const Container = ({children}) => {
  return (
    <div className="w-[1000px] mx-auto">
        {children}
        <h1>container</h1>
    </div>
  )
}

export default Container