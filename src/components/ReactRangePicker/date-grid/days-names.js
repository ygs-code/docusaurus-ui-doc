import React from 'react';
import {days} from '@/components/ReactRangePicker/const';

const DaysNames = () => {
  const format = 'micro';
  return days.map((day, index) => (
    <div key={index}>
      <div className="day">{day[format]}</div>
    </div>
  ));
};

export default DaysNames;
