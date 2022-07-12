import dayjs, { type Dayjs } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export interface DayInMonth {
  index: number;
  date: Dayjs;
}

export const getNow = (): Dayjs => {
  return dayjs().tz('Asia/Seoul');
};

export const getDaysInCurrentMonth = (): DayInMonth[] => {
  const now = dayjs().tz('Asia/Seoul');
  const allDaysCount = now.daysInMonth();
  const currentDate = now.date();

  return Array.from({ length: allDaysCount - currentDate + 1 }, (x, i) => {
    return {
      index: i,
      date: dayjs()
        .tz('Asia/Seoul')
        .set('date', currentDate + i)
        .set('hour', 0)
        .set('minute', 0)
        .set('second', 0),
    };
  });
};
