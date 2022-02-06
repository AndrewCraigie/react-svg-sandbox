import React from "react";

const SvgSketch = (props) => {

   const {sketchOptions: {units, width, height, viewBox}} = props;

    const viewBoxDefinition = `${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.height}`

    return (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBoxDefinition} >
             {props.children}
         </svg>
    )

}

export default SvgSketch;
