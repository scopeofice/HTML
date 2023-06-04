import React, { useState } from "react";


export default function About(props) {
  //   let myStyle = {
  //     color: "white",
  //     backgroundColor: "black",
  //   };

//   const [myStyle, setMyStyle] = useState({
//     color: "white",
//     backgroundColor: "black",
//     border: '2px solid darkblue'
//   });
//   const [btnText, setBtnText] = useState("Light Mode");
//   const changeState = () => {
//     if (myStyle.color === "white") {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//         border: '2px solid white',
//       });
//       setBtnText("Dark Mode");
//     } else {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//         border: '2px solid darkblue'
//       });
//       setBtnText("Light Mode");
//     }
//   };

  return (
    <footer>
      <div className="container mx-3 my-3">
        <h1 className={`text-${props.mode==='light'?'black':'white'} my-3`}>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='dark'?'green':'white'}}
              >
                Mission
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='dark'?'red':'white'}} >
                <strong>To be Rich</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='dark'?'green':'white'}}
              >
                Achivements
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='dark'?'red':'white'}}>
                <strong>None</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='dark'?'green':'white'}}
              >
                Find us
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='dark'?'red':'white'}}>
                <strong>Please don't</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
