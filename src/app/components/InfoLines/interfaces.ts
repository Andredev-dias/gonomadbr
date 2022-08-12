import React, { HtmlHTMLAttributes } from "react";

/**
 * Interface do COntainer
 */
interface IContainer extends React.HTMLAttributes<HTMLElement> {
  
    infoLabelCost? : string;
    infoValueCost?: number;
    infoLabelSec? : string;
    infoValueSec?: number;
    infoLabelTrans? : string;
    infoValueTrans?: number;
    infoLabelCul? : string;
    infoValueCul?: number;

}


export type {IContainer};