import React from "react";

/**
 * Interface do COntainer
 */
interface IMap extends React.HTMLAttributes<HTMLElement> {
    lng: number ;
    lat: number ;
    zoom?: number;
    infoLabelCost?: string;
    infoValueCost?:number ;
    infoLabelSec?: string;
    infoValueSec?:number ;
    infoLabelTrans? : string;
    infoValueTrans?: number;
    infoLabelCul? : string;
    infoValueCul?: number;
    infoTemp?: number;
}


export type {IMap};