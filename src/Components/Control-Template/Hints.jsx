import React from 'react';

export const level1Hints = (
    <div>
        <p className = "hint">To fire at the end of the field, do this. <mark style={{backgroundColor : "blue", color: "white"}}>justify-content : flex-end;</mark></p>
    </div>
);

export const level2Hints = (
    <div>
        <p className = "hint">Here's a list of spells</p>
        <ol>
            <li>justify-content : flex-start</li>
            <li>justify-content : flex-end</li>
            <li>justify-content : center</li>
            <li>justify-content : space-between</li>
            <li>justify-content : space-around</li>
        </ol>
    </div>
);

export const level3Hints = (
    <div>
        <p className = "hint">It seems you need to spell multiple times(2 lines)</p>
        <p className = "hint">Here's another list of spells</p>
        <ol style={{fontSize: "0.9rem"}}>
            <li>align-items : flex-start</li>
            <li>align-items : flex-end</li>
            <li>align-items : center</li>
            <li>align-items : baseline</li>
            <li>align-items : stretch</li>
        </ol>
    </div>
);

export const level4Hints = (
    <div>
        <p className = "hint">It seems you need to spell mutiple times(2 lines)</p>
        <p className = "hint">Here's another list of spells</p>
        <ol style={{fontSize: "0.9rem"}}>
            <li>flex-direction : row</li>
            <li>flex-direction : row-reverse</li>
            <li>flex-direction : column</li>
            <li>flex-direction : column-reverse</li>
        </ol>
    </div>
);