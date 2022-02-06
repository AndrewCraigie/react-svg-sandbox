import React from "react";

const SvgSketchGridLine = (props) => {

    const {x1, y1, x2, y2, stroke, strokeWidth, strokeDasharray} = props.def;

    return (
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray}/>
    )

}

export default SvgSketchGridLine;
