import React, { useEffect, useState } from "react";
import "./cssfiles/Clock2.css"
function Clock() {
    useEffect(() => {
        function updateTimeAndDate() {
          const now = new Date();
          let hours = now.getHours();
          const minutes = now.getMinutes().toString().padStart(2, "0");
          let amPm = hours >= 12 ? "PM" : "AM";
          if (hours > 12) {
            hours -= 12;
          } else if (hours === 0) {
            hours = 12;
          }
          let timeStr = hours.toString().padStart(2, "0") + minutes;
          if (timeStr.startsWith("0")) {
            timeStr = " " + timeStr.slice(1);
          }
          let month = (now.getMonth() + 1).toString().padStart(2, "0");
          let day = now.getDate().toString().padStart(2, "0");
          const year = now.getFullYear().toString().slice(-2);
          if (month.startsWith("0")) {
            month = " " + month.slice(1);
          }
          if (day.startsWith("0")) {
            day = " " + day.slice(1);
          }
          const displayStr = timeStr + amPm + month + day + year;
          for (let i = 0; i < 12; i++) {
            console.log(displayStr)
            document.getElementById("char2" + i + "1").textContent = displayStr[i];
            document.getElementById("char2" + i + "2").textContent = displayStr[i];
          }
        }
    
        updateTimeAndDate();
        const intervalId = setInterval(updateTimeAndDate, 60000);
    
        const timeoutId = setTimeout(() => {
          document.querySelector(".clock2").classList.toggle("off2");
          console.log("timedone");
        }, 3000);
    
        document.addEventListener("visibilitychange", () => {
          const clockElement = document.querySelector(".clock2");
          if (clockElement) {
            if (!document.hidden) {
              setTimeout(() => {
                clockElement.classList.remove("off2");
                console.log("timedone");
              }, 2000);
              return null
            }  if (document.hidden) {
              clockElement.classList.add("off2");
              return null
            }
          } else {
            console.error("Clock element not found in the document.");
          }
        });
    
    
        return () => {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
        };
      }, []); // Empty dependency array ensures useEffect runs only once after initial render
    
      useEffect(() => {
        const buttonClickHandler = () => {
          document.querySelector(".clock2").classList.toggle("off2");
        };
    
        document
          .querySelector(".button2")
          .addEventListener("click", buttonClickHandler);
    
        return () => {
          document
            .querySelector(".button2")
            .removeEventListener("click", buttonClickHandler);
        };
      }, []);

  return (
    <div className="clockcontainer2">
  <div className="clockcontainer2">
    <svg id="noise-svg">
      {/* <!-- gives background a bit of texture --> */}
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.5"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect id="noise-rect" filter="url(#noiseFilter2)" />
    </svg>

    <div class="clock2 off2 ">
      <div class="shadow2"></div>
      <div class="base-container2">
        <div class="base2">
          <div></div>
        </div>
      </div>
      <div class="small-outer-pipe2">
        <div class="small-inner-pipe2"></div>
      </div>
      <div class="outer-pipe2">
        <div class="inner-pipe2"></div>
      </div>
      <div class="pipe-accents2">
        <div class="top-tube2"></div>
        <div class="tube-holders2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="top2"></div>
        <div class="topinset2"></div>
        <div class="left2">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="right2">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="bottom-left2"></div>
        <div class="bottom-right2"></div>
      </div>

      <div class="display2">
            <div class="row2">
              <div class="col2">
                <div>8</div>
                <div id="char201">0</div>
                <div id="char202">0</div>
              </div>
              <div class="col2">
                <div>8</div>
                <div id="char211">0</div>
                <div id="char212">0</div>
              </div>
            </div>
            <div class="row2">
              <div class="col2">
                <div>8</div>
                <div id="char221">0</div>
                <div id="char222">0</div>
              </div>
              <div class="col2">
                <div>8</div>
                <div id="char231">0</div>
                <div id="char232">0</div>
              </div>
            </div>
            <div style={{height: 0.2+"em"}}></div>
            <div class="small-row2">
              <div class="row2">
                <div class="col2">
                  <div>8</div>
                  <div id="char241">0</div>
                  <div id="char242">0</div>
                </div>
                <div class="col2">
                  <div>8</div>
                  <div id="char251">0</div>
                  <div id="char252">0</div>
                </div>
              </div>
            </div>
            <div class="row2">
              <div class="col2">
                <div>8</div>
                <div id="char261">0</div>
                <div id="char262">0</div>
              </div>
              <div class="col2">
                <div>8</div>
                <div id="char271">0</div>
                <div id="char272">0</div>
              </div>
            </div>
            <div class="row2">
              <div class="col2">
                <div>8</div>
                <div id="char281">0</div>
                <div id="char282">0</div>
              </div>
              <div class="col2">
                <div>8</div>
                <div id="char291">0</div>
                <div id="char292">0</div>
              </div>
            </div>
            <div class="row2">
              <div class="col2">
                <div>8</div>
                <div id="char2101">0</div>
                <div id="char2102">0</div>
              </div>
              <div class="col2">
                <div>8</div>
                <div id="char2111">0</div>
                <div id="char2112">0</div>
              </div>
            </div>
          </div>

      <div class="glass-tube2"></div>
      <div class="hex2">
        <div class="overlay2"></div>
      </div>

      <div class="tube-base-container2">
        <div class="wires2">
          <div></div>
          <div></div>
        </div>
        <div class="tube-base2"></div>
        <div class="rods2">
          <div class="left-rod2"></div>
          <div class="center-rod2"></div>
          <div class="right-rod2"></div>
        </div>
        <div class="tube-btm2"></div>
      </div>

      <div class="power-cord2">
        <div></div>
        <div></div>
      </div>

      <div class="button2">
        <div></div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Clock;
