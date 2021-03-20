import React from 'react'
import { SideBar } from './SideBar'

export const MainBody = () => {
    return (
        <>
        <div className="row">
          <div className="col-2 bg-primary">
            <SideBar />
          </div>
         
          <div className="col bg-warning">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus
              ipsum alias dignissimos magnam, error quibusdam autem. Architecto,
              tenetur fugiat tempora ratione nisi iure tempore facilis, velit
              inventore, ducimus laudantium?
            </p>
          </div>
        
        </div>
      </>
    )
}
