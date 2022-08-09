import React from "react";

/**
 * Interface do COntainer
 */
interface IMap extends React.HTMLAttributes<HTMLElement> {
    lng: number ;
    lat: number ;
    zoom?: number;
    IconInfo?:string ;
    infoLabel?: string;
    infoValue?:number ;
    infoTemp?: number;
}


export type {IMap};