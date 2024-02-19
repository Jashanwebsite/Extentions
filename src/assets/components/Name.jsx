import React, { useEffect, useState } from "react";
import "./cssfiles/name.css";
import Clock from "./Clock";
import Clock2 from "./Clock2";

function Name() {
  const [animation, setanimation] = useState(false);
    
  useEffect(() => {
    const starting = setInterval(() => {
      const j = document.getElementById("j");
      const a = document.getElementById("a");
      const s = document.getElementById("s");
      const h = document.getElementById("h");
      const last_a = document.getElementById("last_a");
      const n = document.getElementById("n");

      if (animation) {
        j.classList.toggle("animation");
        if (j.classList.contains("doneanimation")) {
          h.classList.toggle("animation");
        }
      }
    }, 4);
    // for done
    const mid = setInterval(() => {
      const j = document.getElementById("j");
      const a = document.getElementById("a");
      const s = document.getElementById("s");
      const h = document.getElementById("h");
      const last_a = document.getElementById("last_a");
      const n = document.getElementById("n");
      if (animation) {
        if (!j.classList.contains("doneanimation")) {
          return j.classList.add("doneanimation");
        }

        if (
          j.classList.contains("doneanimation") &&
          !h.classList.contains("doneanimation") &&
          !a.classList.contains("doneanimation")
        ) {
          return setTimeout(async () => {
            h.classList.add("doneanimation");
          }, 0);
        }

        if (
          h.classList.contains("doneanimation") &&
          !a.classList.contains("doneanimation")
        ) {
          const returnanimation = () => {
            a.classList.add("doneanimation");
            last_a.classList.add("doneanimation");
            console.log("returnanimation");
          };
          return setTimeout(returnanimation, 0);
        }
        if (
          !s.classList.contains("doneanimation") &&
          a.classList.contains("doneanimation")
        ) {
          const returnanimation = () => {
            s.classList.add("doneanimation");
            n.classList.add("doneanimation");
            console.log("returnanimation");
          };
          return setTimeout(returnanimation, 0);
        }
      }
    }, 6000);

    return () => {
      clearInterval(starting);
      clearInterval(mid);
    };
  }, [animation]);
  //  for handeling the a and last_a ani mation -----------------------------------------------------------------------------------------------------
  useEffect(() => {
    const interval = setInterval(async () => {
      const a = document.getElementById("a");
      const h = document.getElementById("h");
      const last_a = document.getElementById("last_a");
      if (animation) {
        if (
          h.classList.contains("doneanimation") &&
          !a.classList.contains("doneanimation")
        ) {
          last_a.classList.toggle("animation");
          a.classList.toggle("animation");
          console.log("a dimming start");
        }
      }
    }, 300);
    return () => clearInterval(interval);
  }, [animation]);
  //  for handeling the s and n ani mation -----------------------------------------------------------------------------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      const s = document.getElementById("s");
      const n = document.getElementById("n");
      const a = document.getElementById("a");
      if (animation) {
        if (
          a.classList.contains("doneanimation") &&
          !s.classList.contains("doneanimation")
        ) {
          s.classList.toggle("animation");
          n.classList.toggle("animation");
          console.log("s dimming start");
        }
      }
      return () => clearInterval(interval);
    }, 10);
  }, [animation]);
  // for resetting animation
  useEffect(() => {
    const interval = setInterval(() => {
      const j = document.getElementById("j");
      const a = document.getElementById("a");
      const s = document.getElementById("s");
      const h = document.getElementById("h");
      const last_a = document.getElementById("last_a");
      const n = document.getElementById("n");
      
      if (animation) {
        const lists = ["animation", "doneanimation"];
      
        // Iterate through the elements and remove each class from the list
        [j, s, h, a, last_a, n].forEach(element => {
          lists.forEach(className => {
            element.classList.remove(className);
          });
        });
      
        console.log("Animations set to false");
        setanimation(false);
      }
       if(!animation) {
        console.log("aimation set to true")
         setanimation(true);
      }
    }
    , 30000);
    return ()=>clearInterval(interval)
  }, [animation]);


  //  components ---------------------------------------------------------------------
  return (
    <div>
      <Clock></Clock>
      <Clock2></Clock2>
    <div className="container" id="container">
      
      <h1 className="j  " id="j">
        j
      </h1>
      <h1 className="a  " id="a">
        a
      </h1>
      <h1 className="s  " id="s">
        s
      </h1>
      <h1 className="h  " id="h">
        h
      </h1>
      <h1 className="last_a" id="last_a">
        a
      </h1>
      <h1 className="n  " id="n">
        n
      </h1>
    </div>
    </div>
  );
}

export default Name;
