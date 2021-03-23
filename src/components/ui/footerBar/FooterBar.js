import React from "react";

export const FooterBar = () => {
  return (
    <div id="footerBar" className="row px-2 py-2 text-white fixed-bottom">
      <div className="col-lg-4 col-md-2 col-sm-2">
        <img
          alt=""
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div className="col-md-auto col-sm-3 d-none d-sm-block">
        <span>Seguinos en </span>
        <a href="https://www.facebook.com/edenoroficial/">
          <img
            src="https://www.edenordigital.com/static/media/facebook-white.0d695261.svg"
            alt="facebook"
          />
        </a>
        <a href="https://twitter.com/edenorclientes?lang=es">
          <img
            src="https://www.edenordigital.com/static/media/twitter-white.11cbf943.svg"
            alt="twitter"
          />
        </a>
        <a href="https://www.youtube.com/user/EdenorOficial">
          <img
            src="https://www.edenordigital.com/static/media/youtube-white.28dc2944.svg"
            alt="youtube"
          />
        </a>
      </div>
      <div className="col-sm d-none d-sm-block text-right">
        <small className="font-weight-bold">Información: </small>
        <a href="/" className="m-2">
          Centro de ayuda
        </a>
        <a href="/" className="m-2">
          Nota Legal
        </a>
        <a href="/" className="m-2">
          Politica de privacidad
        </a>
      </div>
    </div>
  );
};
