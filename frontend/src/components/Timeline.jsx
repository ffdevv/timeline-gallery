import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import { Spinner } from "react-bootstrap";
import { toArrAndMap } from '../helpers';

import './Timeline.css';

const Timeline = ({ items, curIdx, setCurIdx }) => {
  const [itemsArray, itemsMap] = toArrAndMap(items);
  return (
    <div className="horizontal-timeline">
      <HorizontalTimeline
        styles={{
          background: "#f8f8f8",
          foreground: "#1A79AD",
          outline: "#dfdfdf"
        }}
        getLabel={(_, index) => itemsArray[index].label}
        index={curIdx}
        indexClick={(index) => {
          setCurIdx(index);
        }}
        values={itemsArray.map((x) => x.data)}
      />
    </div>
  )
}

export default Timeline;