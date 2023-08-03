/***************************************************************************************
                   !!  DO NOT EDIT THIS TEMPLATE   !!
          !!  CLICK THE FORK OPTION ON THE TOP RIGHT TO CONTINUE !!
/***************************************************************************/

/*************  Frames provided to test out your algorithm   ***************/

import frames1 from "./frames/frames1.json";
import frames2 from "./frames/frames2.json";
import frames3 from "./frames/frames3.json";
import frames4 from "./frames/frames4.json";
import frames5 from "./frames/frames5.json";
import frames6 from "./frames/frames6.json";
import frames7 from "./frames/frames7.json";

/***************************************************************************/

interface Frame {
  // center
  x1: number;
  y1: number;
  // top
  x2: number;
  y2: number;
  // bottom
  x3: number;
  y3: number;
}

const calculateOpenings = (frames: Frame[]): number => {
  let openings: number = 0;
  /*
      I would define an open scissor when the y-distance from top to bottom blade is greater than 1.
      I would define a closed scissor when y2 and y3 are the same.
      ASSUME: If the scissor starts open, then closes I count it as 1 opening.
      ==> With my definition: When a scissor goes from open to close that is one opening.
    */
  let wasOpen: boolean = false;
  // Write your algorithm
  frames.forEach(function (frame) {
    const distance = frame.y2 - frame.y3;
    // scissor is above the threshold of open
    if (distance >= 1) {
      wasOpen = true;
    }
    // when scissor is closed, and it was open before increment openings
    if (frame.y2 === frame.y3 && wasOpen) {
      openings++;
    }
  });
  console.log(`**** Openings: ${openings} ****`);
  return openings;
};

// Run the following with different frame JSON files
calculateOpenings(frames1);
calculateOpenings(frames2);
calculateOpenings(frames3);
calculateOpenings(frames4);
calculateOpenings(frames5);
calculateOpenings(frames6);
calculateOpenings(frames7);
