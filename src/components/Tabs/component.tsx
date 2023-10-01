// import { Dispatch } from 'react';
import Tab from '../Tab/component';

interface Props {
  tabNames: string[] | number[];
  onTabSelect: (value: string | number) => void;
}

export default function Tabs({ tabNames, onTabSelect }: Props) {
  return (
    <div>
      {tabNames.map((tabName) => (
        <Tab onClick={onTabSelect}>{tabName}</Tab>
      ))}
    </div>
  );
}
