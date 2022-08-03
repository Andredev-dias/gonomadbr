import React from "react";

/**
 * Interface do COntainer
 */
interface IContainer extends React.HTMLAttributes<HTMLElement> {
    onClick?: () => void;
    city?: string;
    image?: string;
}

export type {IContainer };