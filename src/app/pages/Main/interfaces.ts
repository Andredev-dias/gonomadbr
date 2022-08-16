import React from 'react';

/**
 * Interface do COntainer
 */
interface IDataCards
  extends React.HTMLAttributes<HTMLElement> {
  name?: string;
  temp?: number;
  imageUrl?: string;
  cost?: number;
  satisfactionValue?: number;
  homeSecutityValue?: number;
  transValue?: number;
  cultureValue?: number;
  wifi?: number;
  dataCards?: string;
  dataModal?: string;
}

export type { IDataCards };
