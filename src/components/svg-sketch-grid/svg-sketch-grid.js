import React from "react";

import SvgSketchGridLine from "./SvgSketchGridLine";

const SvgSketchGrid = (props) => {

    const {sketchGridOptions: {units, width, height, gridSpacing, gridLineStyle}} = props;
    const lineOffset = parseFloat(gridLineStyle.strokeWidth) / 2;

    const gridLineDefs = [];

    function createGridLineDef(x1, y1, x2, y2) {
        return {
            x1,
            y1,
            x2,
            y2,
            stroke: gridLineStyle.stroke,
            strokeWidth: gridLineStyle.strokeWidth  + units,
            strokeDasharray: gridLineStyle.strokeDasharray
        }
    }

    // Create horizontal lines
    for ( let y = 0; y < height; y+= gridSpacing ) {
        gridLineDefs.push(createGridLineDef((0 - lineOffset), (y - lineOffset), (width - lineOffset), (y - lineOffset)))

    }

    // Create vertical lines
    for ( let x = 0; x< width; x+= gridSpacing ) {
        gridLineDefs.push(createGridLineDef((x - lineOffset), (0 - lineOffset), (x -lineOffset), (height - lineOffset)))
    }

    return (
        <g>
            {gridLineDefs.map((def, index) => <SvgSketchGridLine key={index} def={def}/>)}
        </g>
    )

}

export default SvgSketchGrid;
