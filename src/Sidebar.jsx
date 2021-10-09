import React from 'react'

const Sidebar = () => {
    return (
      <>
      <input type="checkbox" id="sidebar-toggle" className="sidebar-toggle"/>
      <label htmlFor="sidebar-toggle" className="bg-dark mt-1 w-100"><i class="fas fa-toggle-on fa-2x text-white"></i></label>
        <div class="sidebar-div">
            <ul class="sidebar-ul">
                <li class="sidebar-li">Home</li>
                <li class="sidebar-li">Categories</li>
                <li class="sidebar-li">About</li>
            </ul>
        </div>
      </>
    )
}

export default Sidebar
