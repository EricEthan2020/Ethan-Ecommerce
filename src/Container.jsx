import React from "react"
const Container = ({children}) => {
  return (
    <div className="max-w-7xl mx-auto">
        {children}
        <h1>container</h1>
    </div>
  )
}

export default Container