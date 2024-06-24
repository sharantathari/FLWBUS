import { useEffect, useRef } from 'react';

export default function Threed(){
    const spinContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const radius = 240;
        let autoRotate = true;
        const rotateSpeed = -60;
        let imgWidth = 120;
        let imgHeight = 90;

        const ospin = spinContainerRef.current;

        if (ospin) {
            ospin.style.width = imgWidth + "px";
            ospin.style.height = imgHeight + "px";

            const ground = document.getElementById('ground');
            if (ground) {
                ground.style.width = radius * 3 + "px";
                ground.style.height = radius * 3 + "px";
            }

            // Convert HTMLCollection to an array for iteration
            const aImg = ospin.getElementsByTagName('img');
            const aEle = Array.from(aImg);

            for (let i = 0; i < aEle.length; i++) {
                aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
                aEle[i].style.transition = "transform 1s";
                aEle[i].style.transitionDelay = `${(aEle.length - i) / 4}s`;
            }

            if (autoRotate) {
                const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
                ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
            }
        }
    }, []);

    return (
        <div id="drag-container">
            <div id="spin-container" ref={spinContainerRef}>
                <>
                    <img
                        src="./assets/images/updated/planetarium-22.png"
                        alt="Images"
                    // href="services.html"
                    />
                    <img
                        src="./assets/images/updated/mobile-lab.jpg"
                        alt="Images"
                    // href="services.html"
                    />
                    <img
                        src="./assets/images/updated/workshops.png"
                        alt="Images"
                    // href="services.html"
                    />
                    <img
                        src="./assets/images/updated/hackathon.png"
                        alt="Images"
                    // href="services.html"
                    />
                    <img
                        src="./assets/images/updated/science-expos.jpg"
                        alt="Images"
                    // href="services.html"
                    />
                    <img
                        src="./assets/images/updated/diy.jpg"
                        alt="Images"
                    // href="services.html"
                    />
                    <img
                        src="./assets/images/updated/one-to-one-mentorship.jpg"
                        alt="Images"
                    // href="services.html"
                    />
                    <img
                        src="./assets/images/updated/technology-enableres.jpg"
                        alt="Images"
                    // href="services.html"
                    />
                </>

                <div id="ground"></div>
            </div>
            <style>
                {`* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  /* for touch screen */
  touch-action: none; 
}

body {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background:#303030;
  -webkit-perspective: 450px;
          perspective: 450px;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}

#drag-container, #spin-container {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: auto;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform: rotateX(-10deg);
          transform: rotateX(-10deg);
}

#drag-container img, #drag-container video {
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 200px;
  font-size: 50px;
  text-align: center;
  -webkit-box-shadow: 0 0 8px #fff;
          box-shadow: 0 0 8px #fff;
  /*-webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);*/
}

#drag-container img:hover, #drag-container video:hover {
  -webkit-box-shadow: 0 0 15px #fffd;
          box-shadow: 0 0 15px #fffd;
  /*-webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0007);*/
}

#drag-container p {
  font-family: Serif;
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%) rotateX(90deg);
          transform: translate(-50%,-50%) rotateX(90deg);
  color: #fff;
}

#ground {
  width: 900px;
  height: 900px;
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%) rotateX(90deg);
          transform: translate(-50%,-50%) rotateX(90deg);
  background: -webkit-radial-gradient(center center, farthest-side , #9993, transparent);
}

#music-container {
  position: absolute;
  top: 0;
  left: 0;
}

@-webkit-keyframes spin {
  from{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  } to{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}

@keyframes spin {
  from{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  } to{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}
@-webkit-keyframes spinRevert {
  from{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  } to{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  }
}
@keyframes spinRevert {
  from{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  } to{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  }
}
`}
            </style>
        </div>
    );
};

