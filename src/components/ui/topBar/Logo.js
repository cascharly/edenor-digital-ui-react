import React from "react";

export const Logo = ({ viewBox = "10 0 186 33" }) => {
  // console.log(viewBox);
  return (
    <div className="col align-self-center">
      <svg width="176px" height="33px" viewBox={viewBox}>
      {/* default size ---> viewBox="10 0 186 33" */}
      <g>
        <g
          transform="translate(-20.000000, -16.000000)"
          fill="#FFFFFF"
          fillRule="nonzero"
        >
          <g transform="translate(20.000000, 16.000000)">
            <g transform="translate(0.000000, 0.000000)">
              <path
                d="M96.3416667,15.8583333 C96.3416667,14.1166667 96.6166667,12.5583333 97.075,11.3666667 C97.5333333,10.0833333 98.175,9.16666667 99.0916667,8.525 C99.9166667,7.88333333 100.833333,7.51666667 101.658333,7.24166667 C102.575,6.96666667 103.491667,6.875 104.591667,6.875 C106.15,6.875 107.616667,7.05833333 108.991667,7.51666667 L108.991667,1.28333333 L111.558333,4.30833333 L111.558333,19.7083333 C111.558333,20.1666667 111.466667,20.7166667 111.375,21.175 C111.191667,21.6333333 110.916667,22.275 110.458333,23.0083333 C110,23.7416667 109.266667,24.2916667 108.166667,24.75 C107.066667,25.2083333 105.783333,25.3916667 104.225,25.3916667 C103.583333,25.3916667 102.941667,25.3 102.3,25.2083333 C101.658333,25.1166667 101.016667,24.8416667 100.191667,24.3833333 C99.4583333,24.0166667 98.8166667,23.4666667 98.2666667,22.825 C97.7166667,22.1833333 97.2583333,21.2666667 96.8916667,20.075 C96.525,18.7916667 96.3416667,17.4166667 96.3416667,15.8583333 M98.9083333,15.8583333 C98.9083333,17.325 99.0916667,18.6083333 99.3666667,19.6166667 C99.7333333,20.625 100.1,21.3583333 100.741667,21.8166667 C101.291667,22.275 101.841667,22.55 102.391667,22.7333333 C102.941667,22.9166667 103.491667,22.9166667 104.225,22.9166667 C107.433333,22.9166667 108.991667,21.9083333 108.991667,19.8 L108.991667,10.0833333 C107.525,9.44166667 106.058333,9.16666667 104.591667,9.16666667 C102.666667,9.16666667 101.2,9.71666667 100.283333,10.725 C99.3666667,11.825 98.9083333,13.475 98.9083333,15.8583333"
                id="Shape"
              ></path>
              <path
                d="M120.541667,15.95 C120.541667,14.1166667 120.816667,12.4666667 121.275,11.1833333 C121.733333,9.9 122.466667,8.89166667 123.291667,8.34166667 C124.116667,7.7 124.941667,7.33333333 125.675,7.15 C126.408333,6.96666667 127.233333,6.78333333 128.058333,6.78333333 C129.616667,6.78333333 130.9,6.96666667 131.908333,7.425 C132.916667,7.88333333 133.65,8.43333333 134.108333,9.075 C134.566667,9.71666667 134.841667,10.3583333 134.933333,10.8166667 C135.116667,11.275 135.116667,11.825 135.116667,12.2833333 L135.116667,25.7583333 C135.116667,26.5833333 135.025,27.3166667 134.75,27.9583333 C134.566667,28.6 134.108333,29.2416667 133.65,29.8833333 C133.1,30.525 132.366667,30.9833333 131.266667,31.35 C130.166667,31.7166667 128.883333,31.9 127.325,31.9 C125.675,31.9 123.933333,31.7166667 122.191667,31.2583333 L122.191667,28.7833333 C123.75,29.2416667 125.308333,29.425 127.05,29.425 C128.15,29.425 129.158333,29.3333333 129.891667,29.15 C130.625,28.9666667 131.266667,28.6916667 131.541667,28.2333333 C131.908333,27.8666667 132.091667,27.5 132.275,27.1333333 C132.366667,26.7666667 132.458333,26.3083333 132.458333,25.7583333 L132.458333,24.0166667 C131.083333,24.475 129.708333,24.6583333 128.241667,24.6583333 C127.416667,24.6583333 126.683333,24.5666667 126.041667,24.475 C125.308333,24.3833333 124.666667,24.1083333 123.933333,23.65 C123.2,23.2833333 122.558333,22.7333333 122.1,22.0916667 C121.55,21.45 121.183333,20.625 120.816667,19.525 C120.45,18.425 120.541667,17.4166667 120.541667,15.95 M123.108333,15.95 C123.108333,17.325 123.291667,18.425 123.566667,19.25 C123.841667,20.075 124.3,20.8083333 124.85,21.175 C125.4,21.6333333 125.95,21.9083333 126.5,22 C127.05,22.1833333 127.691667,22.1833333 128.516667,22.1833333 C129.983333,22.1833333 131.358333,21.9083333 132.733333,21.3583333 L132.733333,12.1916667 C132.733333,10.175 131.266667,9.16666667 128.241667,9.16666667 C127.6,9.16666667 127.05,9.25833333 126.5,9.35 C126.041667,9.53333333 125.491667,9.80833333 124.941667,10.2666667 C124.391667,10.725 123.933333,11.3666667 123.658333,12.375 C123.291667,13.3833333 123.108333,14.575 123.108333,15.95"
                id="Shape"
              ></path>
              <path
                d="M143.55,9.44166667 L143.55,7.05833333 L146.666667,7.05833333 L146.666667,2.01666667 L149.233333,2.01666667 L149.233333,7.05833333 L153.816667,7.05833333 L153.816667,9.44166667 L149.233333,9.44166667 L149.233333,20.35 C149.233333,21.2666667 149.416667,21.9083333 149.783333,22.275 C150.15,22.6416667 150.791667,22.825 151.8,22.825 C152.533333,22.825 153.175,22.6416667 153.816667,22.3666667 L153.816667,24.8416667 C153.083333,25.1166667 152.258333,25.3 151.525,25.3 L151.433333,25.3 C150.975,25.3 150.516667,25.2083333 150.058333,25.1166667 C149.6,25.025 149.05,24.8416667 148.5,24.475 C147.95,24.2 147.491667,23.65 147.125,22.9166667 C146.758333,22.1833333 146.575,21.2666667 146.575,20.1666667 L146.575,9.44166667 L143.55,9.44166667 Z"
                id="Path"
              ></path>
              <path
                d="M155.191667,19.525 C155.191667,18.7 155.375,17.9666667 155.65,17.325 C155.925,16.6833333 156.291667,16.1333333 156.75,15.7666667 C157.208333,15.4 157.758333,15.0333333 158.4,14.7583333 C159.041667,14.4833333 159.683333,14.3 160.141667,14.1166667 C160.691667,14.025 161.241667,13.8416667 161.975,13.8416667 C162.708333,13.75 163.166667,13.75 163.441667,13.75 C163.716667,13.75 164.083333,13.75 164.541667,13.75 L167.383333,13.9333333 C167.383333,12.2833333 166.925,11.1833333 166.1,10.45 C165.183333,9.71666667 163.9,9.44166667 162.158333,9.44166667 C160.233333,9.44166667 158.491667,9.71666667 156.933333,10.2666667 L156.933333,7.79166667 C158.675,7.15 160.508333,6.875 162.341667,6.875 C164.816667,6.875 166.741667,7.51666667 168.116667,8.8 C169.4,10.0833333 170.133333,11.9166667 170.133333,14.3916667 L170.133333,19.8 C170.133333,20.9 169.858333,21.9083333 169.308333,22.7333333 C168.758333,23.5583333 168.116667,24.1083333 167.291667,24.475 C166.466667,24.8416667 165.641667,25.1166667 164.908333,25.2083333 C164.175,25.3916667 163.441667,25.3916667 162.708333,25.3916667 C162.158333,25.3916667 161.608333,25.3916667 161.058333,25.3 C160.508333,25.2083333 159.866667,25.025 159.133333,24.8416667 C158.4,24.5666667 157.758333,24.2916667 157.208333,23.8333333 C156.658333,23.4666667 156.2,22.9166667 155.833333,22.1833333 C155.466667,21.3583333 155.191667,20.4416667 155.191667,19.525 M157.85,19.525 C157.85,21.725 159.5,22.9166667 162.708333,22.9166667 L162.8,22.9166667 C166.008333,22.9166667 167.566667,21.8166667 167.566667,19.7083333 L167.566667,16.3166667 C166.741667,16.1333333 165.733333,16.1333333 164.358333,16.1333333 C159.958333,15.95 157.85,17.1416667 157.85,19.525"
                id="Shape"
              ></path>
              <path
                d="M8.43333333,6.875 C5.68333333,6.875 3.66666667,7.7 2.38333333,9.44166667 C1.1,11.1833333 0.458333333,13.3833333 0.458333333,16.225 C0.458333333,17.6916667 0.641666667,18.975 1.00833333,20.075 C1.375,21.175 1.83333333,22.0916667 2.29166667,22.6416667 C2.38333333,22.7333333 2.475,22.825 2.56666667,22.9166667 L2.56666667,22.9166667 C3.94166667,24.3833333 6.05,25.1166667 8.8,25.1166667 C9.99166667,25.1166667 11.1833333,24.9333333 12.5583333,24.475 C13.8416667,24.0166667 14.575,23.4666667 14.575,22.825 C14.575,22.4583333 14.3916667,22 14.025,21.3583333 C13.6583333,20.7166667 13.2916667,20.4416667 12.925,20.4416667 C12.925,20.4416667 12.4666667,20.625 11.55,20.9 C10.6333333,21.2666667 9.35,21.45 8.43333333,21.45 C7.51666667,21.45 6.69166667,21.0833333 6.14166667,20.7166667 C5.31666667,20.1666667 4.85833333,19.1583333 4.76666667,17.6 C4.76666667,16.4083333 4.76666667,16.4083333 4.76666667,14.6666667 C4.76666667,14.6666667 4.76666667,14.6666667 4.76666667,14.575 C4.76666667,14.2083333 4.85833333,13.9333333 4.85833333,13.9333333 C5.04166667,12.7416667 5.31666667,11.9166667 5.86666667,11.275 C6.50833333,10.6333333 7.33333333,10.2666667 8.34166667,10.2666667 C9.44166667,10.2666667 10.2666667,10.725 10.8166667,11.55 C11.4583333,12.375 11.825,13.475 11.9166667,14.6666667 L11.9166667,14.6666667 C11.1833333,14.7583333 10.5416667,14.7583333 10.3583333,14.7583333 C9.53333333,14.85 8.61666667,14.85 7.7,14.9416667 C7.51666667,14.9416667 7.425,14.9416667 7.24166667,14.9416667 C7.15,14.9416667 7.15,14.9416667 7.05833333,14.9416667 C6.69166667,14.9416667 6.325,15.3083333 6.325,15.675 C6.325,16.1333333 6.6,16.5916667 7.05833333,16.6833333 C7.05833333,16.6833333 7.15,16.6833333 7.15,16.6833333 C7.88333333,16.775 8.70833333,16.775 9.53333333,16.8666667 C10.5416667,16.9583333 13.6583333,16.9583333 14.6666667,17.05 L16.3166667,14.3 C16.3166667,11.9166667 15.675,10.8166667 14.3916667,9.16666667 C13.0166667,7.7 11,6.875 8.43333333,6.875"
                id="Path"
              ></path>
              <path
                d="M42.1666667,6.875 C39.4166667,6.875 37.4,7.7 36.1166667,9.44166667 C34.8333333,11.1833333 34.1916667,13.3833333 34.1916667,16.225 C34.1916667,17.6916667 34.375,18.975 34.7416667,20.075 C35.1083333,21.175 35.5666667,22.0916667 36.025,22.6416667 C36.1166667,22.7333333 36.2083333,22.825 36.3,22.9166667 L36.3,22.9166667 C37.675,24.3833333 39.7833333,25.1166667 42.5333333,25.1166667 C43.725,25.1166667 44.9166667,24.9333333 46.2916667,24.475 C47.575,24.0166667 48.3083333,23.4666667 48.3083333,22.825 C48.3083333,22.4583333 48.125,22 47.7583333,21.3583333 C47.3916667,20.7166667 47.025,20.4416667 46.6583333,20.4416667 C46.6583333,20.4416667 46.2,20.625 45.2833333,20.9 C44.4583333,21.2666667 43.0833333,21.45 42.1666667,21.45 C41.25,21.45 40.425,21.0833333 39.875,20.7166667 C39.05,20.1666667 38.5916667,19.1583333 38.5,17.6 C38.5,16.4083333 38.5,16.4083333 38.5,14.6666667 C38.5,14.6666667 38.5,14.6666667 38.5,14.575 C38.5,14.2083333 38.5916667,13.9333333 38.5916667,13.9333333 C38.775,12.7416667 39.05,11.9166667 39.6,11.275 C40.2416667,10.6333333 41.0666667,10.2666667 42.075,10.2666667 C43.175,10.2666667 44,10.725 44.55,11.55 C45.1916667,12.375 45.5583333,13.475 45.65,14.6666667 L45.65,14.6666667 C44.9166667,14.7583333 44.275,14.7583333 44.0916667,14.7583333 C43.175,14.85 42.35,14.85 41.4333333,14.9416667 C41.25,14.9416667 41.1583333,14.9416667 40.975,14.9416667 C40.8833333,14.9416667 40.8833333,14.9416667 40.7916667,14.9416667 C40.425,14.9416667 40.0583333,15.3083333 40.0583333,15.675 C40.0583333,16.1333333 40.3333333,16.5916667 40.7916667,16.6833333 C40.7916667,16.6833333 40.8833333,16.6833333 40.8833333,16.6833333 C41.6166667,16.775 42.4416667,16.775 43.2666667,16.8666667 C44.275,16.9583333 47.3916667,16.9583333 48.4,17.05 L50.05,14.3 C50.05,11.9166667 49.4083333,10.8166667 48.125,9.16666667 C46.75,7.7 44.7333333,6.875 42.1666667,6.875"
                id="Path"
              ></path>
              <path
                d="M59.4,6.875 C56.5583333,6.875 53.8083333,7.51666667 51.2416667,8.8 L51.2416667,18.5166667 L51.2416667,25.2083333 L53.075,25.2083333 C53.075,25.2083333 55.55,25.3 55.55,22.9166667 L55.55,20.5333333 L55.55,18.5166667 L55.55,11 C56.7416667,10.8166667 57.8416667,10.725 58.85,10.725 C59.7666667,10.725 60.5916667,10.8166667 61.1416667,11 C61.6916667,11.1833333 62.15,11.4583333 62.425,11.825 C62.7,12.1916667 62.8833333,12.4666667 62.975,12.8333333 C63.0666667,13.1083333 63.0666667,13.5666667 63.0666667,14.025 L63.0666667,18.7 L63.0666667,25.3916667 L64.9,25.3916667 C64.9,25.3916667 67.375,25.4833333 67.375,23.1 L67.375,21.9083333 L67.375,18.7 L67.375,14.3916667 C67.375,12.0083333 66.6416667,10.2666667 65.2666667,8.89166667 C63.8,7.51666667 61.875,6.875 59.4,6.875"
                id="Path"
              ></path>
              <path
                d="M77.0916667,6.96666667 C74.3416667,6.96666667 72.325,7.79166667 70.8583333,9.35 C69.3916667,10.9083333 68.6583333,13.2 68.6583333,16.1333333 C68.6583333,19.0666667 69.3916667,21.3583333 70.8583333,22.9166667 C72.325,24.475 74.4333333,25.3 77.0916667,25.3 C79.8416667,25.3 81.8583333,24.475 83.325,22.9166667 C84.7916667,21.3583333 85.525,19.0666667 85.525,16.1333333 C85.525,13.2 84.7916667,10.9083333 83.325,9.35 C81.8583333,7.7 79.75,6.96666667 77.0916667,6.96666667 M80.2083333,20.625 C79.5666667,21.3583333 78.4666667,21.8166667 77.0916667,21.8166667 C75.7166667,21.8166667 74.6166667,21.45 73.975,20.625 C73.3333333,19.8916667 72.9666667,18.3333333 72.9666667,16.1333333 C72.9666667,13.9333333 73.3333333,12.375 73.975,11.6416667 C74.6166667,10.8166667 75.7166667,10.45 77.0916667,10.45 C78.4666667,10.45 79.5666667,10.8166667 80.2083333,11.6416667 C80.85,12.4666667 81.2166667,13.9333333 81.2166667,16.1333333 C81.2166667,18.3333333 80.85,19.8916667 80.2083333,20.625"
                id="Shape"
              ></path>
              <path
                d="M95.6083333,6.875 C94.05,6.875 92.5833333,7.05833333 91.025,7.425 C89.4666667,7.79166667 88.4583333,8.06666667 87.9083333,8.25 C87.3583333,8.43333333 86.9916667,8.61666667 86.7166667,8.70833333 L86.7166667,18.5166667 L86.7166667,25.2083333 L88.55,25.2083333 C88.55,25.2083333 91.025,25.3 91.025,22.9166667 L91.025,21.45 L91.025,18.5166667 L91.025,11.0916667 C92.3083333,10.725 93.8666667,10.5416667 95.6083333,10.45 L95.6083333,6.875 Z"
                id="Path"
              ></path>
              <path
                d="M30.4333333,0.366666667 L28.6,0.366666667 L28.6,7.24166667 C27.5916667,7.05833333 26.5833333,6.96666667 25.6666667,6.96666667 C23.0083333,6.96666667 20.9916667,7.7 19.525,9.25833333 C18.0583333,10.8166667 17.4166667,13.0166667 17.4166667,15.95 C17.4166667,17.5083333 17.6,18.975 18.0583333,20.1666667 C18.425,21.3583333 18.975,22.275 19.525,22.9166667 C20.075,23.5583333 20.8083333,24.0166667 21.5416667,24.475 C22.3666667,24.8416667 23.0083333,25.1166667 23.5583333,25.2083333 C24.1083333,25.3 24.75,25.3916667 25.3,25.3916667 C27.8666667,25.3916667 29.7916667,24.8416667 30.9833333,23.65 C32.2666667,22.4583333 32.8166667,21.0833333 32.8166667,19.4333333 L32.8166667,9.35 L32.8166667,2.93333333 L32.8166667,2.56666667 C32.9083333,0.275 30.4333333,0.366666667 30.4333333,0.366666667 M28.6,19.7083333 C28.6,20.9916667 27.5,21.6333333 25.3916667,21.6333333 C24.0166667,21.6333333 23.1,21.175 22.55,20.2583333 C22,19.3416667 21.725,17.7833333 21.725,15.675 C21.725,13.6583333 22.0916667,12.2833333 22.7333333,11.4583333 C23.4666667,10.6333333 24.475,10.2666667 25.7583333,10.2666667 C26.7666667,10.2666667 27.775,10.3583333 28.6,10.5416667 L28.6,19.7083333 Z"
                id="Shape"
              ></path>
              <path
                d="M142.083333,2.10833333 C142.083333,3.11666667 141.258333,3.94166667 140.25,3.94166667 C139.241667,3.94166667 138.416667,3.11666667 138.416667,2.10833333 C138.416667,1.1 139.241667,0.275 140.25,0.275 C141.258333,0.275 142.083333,1.1 142.083333,2.10833333"
                id="Path"
              ></path>
              <path
                d="M173.341667,0.275 L173.341667,14.3 L173.341667,14.4833333 L173.341667,17.6916667 L173.341667,25.025 L173.433333,25.025 L174.533333,25.025 C174.533333,25.025 174.533333,25.025 174.625,25.025 C174.9,25.025 175.816667,24.9333333 176,23.925 C176,23.8333333 176,23.7416667 176,23.65 L176,22.9166667 L176,21.3583333 L176,21.0833333 L176,18.6083333 L176,0.275 L173.341667,0.275 Z"
                id="Path"
              ></path>
              <path
                d="M138.875,14.3 L138.875,14.3 L138.875,14.4833333 L138.875,17.6916667 L138.875,25.025 L138.875,25.025 L138.966667,25.025 L140.066667,25.025 C140.066667,25.025 140.066667,25.025 140.158333,25.025 C140.433333,25.025 141.35,24.9333333 141.533333,23.925 C141.533333,23.8333333 141.533333,23.7416667 141.533333,23.65 L141.533333,22.9166667 L141.533333,22 L141.533333,21.0833333 L141.533333,18.6083333 L141.533333,6.05 L138.966667,6.05 L138.966667,14.3 L138.875,14.3 Z"
                id="Path"
              ></path>
              <path
                d="M118.341667,2.10833333 C118.341667,3.11666667 117.516667,3.94166667 116.508333,3.94166667 C115.5,3.94166667 114.675,3.11666667 114.675,2.10833333 C114.675,1.1 115.5,0.275 116.508333,0.275 C117.516667,0.275 118.341667,1.1 118.341667,2.10833333"
                id="Path"
              ></path>
              <path
                d="M115.225,14.3 L115.225,14.3 L115.225,14.4833333 L115.225,17.6916667 L115.225,25.025 L115.316667,25.025 L116.416667,25.025 C116.416667,25.025 116.416667,25.025 116.508333,25.025 C116.783333,25.025 117.7,24.9333333 117.883333,23.925 C117.883333,23.8333333 117.883333,23.7416667 117.883333,23.65 L117.883333,22.9166667 L117.883333,22 L117.883333,21.0833333 L117.883333,18.6083333 L117.883333,6.05 L115.316667,6.05 L115.316667,14.3 L115.225,14.3 Z"
                id="Path"
              ></path>
              <path
                d="M108.991667,11 L108.991667,11 L108.991667,10.8166667 L108.991667,7.60833333 L108.991667,0.275 L108.991667,0.275 L108.991667,0.275 L109.083333,0.275 L110.183333,0.275 C110.183333,0.275 110.183333,0.275 110.275,0.275 C110.55,0.275 111.466667,0.366666667 111.65,1.375 C111.65,1.46666667 111.65,1.55833333 111.65,1.65 L111.65,2.38333333 L111.65,3.3 L111.65,4.21666667 L111.65,6.69166667 L111.65,8.70833333 L109.083333,8.70833333 L109.083333,11 L108.991667,11 Z"
                id="Path"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    </div>
  );
};
