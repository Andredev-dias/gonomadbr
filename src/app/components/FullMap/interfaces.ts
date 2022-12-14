import React from 'react';

/**
 * Interface do COntainer
 */
interface IMap extends React.HTMLAttributes<HTMLElement> {
  lng: number;
  lat: number;
  zoom?: number;
  IconInfo?: string;
  infoLabelCost?: string;
  infoValueCost?: number;
  infoLabelSec?: string;
  infoValueSec?: number;
  infoTemp?: number;
  mapTheme: string;
  token?: string;
  theme?: string;
}

export type { IMap };
