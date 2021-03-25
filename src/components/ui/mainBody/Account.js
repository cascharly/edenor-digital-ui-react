import React from 'react'

export const Account = () => {
    return (
        <>
         <div id="account-wrapper" className="row ml-2 ">
        {/* ///////////////////////////////////// */}
        <div id="account-main" className="col-11 p-3 mt-2 mb-2 p-sm-2">
          <div className="row">
            <div id="account-title" className="col-1 m-2 p-0 text-center d-none d-lg-block">
              <span>Cuenta</span>
            </div>
            <div className="col-0 border border-black d-none d-lg-block"></div>
             {/* ///////////////////////////////////// */}
            <div className="col">
              <div className="row">
              <div id="account-address" className="col-lg-auto  ">
                <span>PAVON 2676,</span>
                
              </div>
              <div id="account-city" className="col-lg-auto  ">
                <span>Beccar</span>
              </div>
              </div>
              
              <div id="account-number" className="col p-sm-0 ">
                <span>N° 5012193477 - Titular SPAGNOLETTI CARLOS ARTURO</span>
              </div>
            </div>
             {/* ///////////////////////////////////// */}
          </div>
        </div>
        {/* SVG ////////////////////////////////// */}
        <div id="icon-settings" className="col text-center mr-1 ">
          <svg viewBox="0 0 24 24" fill="#4d97fa">
            <path
              transform="scale(1.2, 1.2)"
              fill="none"
              d="M0 0h20v20H0V0z"
            ></path>
            <path
              transform="scale(1.2, 1.2)"
              d="M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
            ></path>
          </svg>
        </div>
        {/* SVG ////////////////////////////////// */}
      </div>   
        </>
    )
}
