import React from "react";

/**
 * Interface do COntainer
 */
interface IContainer extends React.HTMLAttributes<HTMLElement> {
    onClick?: () => void;
    city?: string;
    image?: string;
    satisfactionValue?: number;
    cultureValue?: number;
    homeSecutityValue?: number;
    transValue?: number;
    wifi?: number;
    cost?: number;
    temperature?: number;
    costUnity?: string;
    unityTemp?: string;
}


export type {IContainer };