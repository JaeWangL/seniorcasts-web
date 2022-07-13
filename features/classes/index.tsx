import DayList from '@components/dayList';
import { getNow } from '@libs/helpers/dayjs_helpers';
import { type Dayjs } from 'dayjs';
import { memo, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';
import ClassList from './classList';

function Classes(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(getNow());

  const onDayClick = useCallback((item: Dayjs): void => {
    setSelectedDate(item);
  }, []);

  return (
    <div>
      <DayList onItemClick={onDayClick} />
      <ClassList selectedDate={selectedDate} />
    </div>
  );
}

export default memo(Classes, isEqual);
