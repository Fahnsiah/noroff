import React, { useLayoutEffect, useRef, useState } from "react";

const MeasureDom = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef();

  useLayoutEffect(() => {
    const { current } = elementRef;
    if (current) {
      setWidth(current.getBoundingClientRect().width);
    }
  }, [elementRef]);

  return <div ref={elementRef}>Element width: {width}px</div>;
};

export default MeasureDom;
