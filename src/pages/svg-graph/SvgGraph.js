import './SvgGraph.css';
import React, { useState } from "react";

import SvgSketch from "../../components/svg-sketch/SvgSketch";
import SvgSketchGrid from "../../components/svg-sketch-grid/svg-sketch-grid";

const SvgGraph = () => {

    const [showGrid, setShowGrid] = useState(true);
    const [units, setUnits] = useState('px');
    const [width, setWidth] = useState(800);
    const [height, setSketchHeight] = useState(800);

    const [gridSpacing, setGridSpacing] = useState(100);
    const [gridLineStroke, setGridLineStroke] = useState('darkgray');
    const [gridLineStrokeWidth, setGridLineStrokeWidth] = useState(1);
    const [gridLineStrokeDashArray, setGridLineStrokeDashArray] = useState('5,5')

    const sketchOptions = {
        units,
        width,
        height,
        viewBox: {
            minX: 0,
            minY: 0,
            width,
            height
        }
    }

    const sketchGridOptions = {
        units,
        width,
        height,
        gridSpacing,
        gridLineStyle: {
            stroke: gridLineStroke,
            strokeWidth: gridLineStrokeWidth,
            strokeDasharray: gridLineStrokeDashArray
        }
    }

    return (
        <div>
            <h2>SVG Graph</h2>

            <div className={'sketch-wrapper'} style={{width: `${width}px`, height: `${height}px`}}>
                <SvgSketch sketchOptions={sketchOptions}>
                    {showGrid ? <SvgSketchGrid sketchGridOptions={sketchGridOptions}/> : null}
                </SvgSketch>
            </div>

        </div>
    )

}

export default SvgGraph;


