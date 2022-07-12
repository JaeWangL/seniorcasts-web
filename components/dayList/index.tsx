import { List, ListItem } from '@chakra-ui/react';
import { getDaysInCurrentMonth } from '@libs/helpers/dayjs_helpers';
import dayjs, { type Dayjs } from 'dayjs';
import { memo, useCallback, useMemo } from 'react';
import isEqual from 'react-fast-compare';

type DayListProps = {
  onItemClick?: (item: Dayjs) => void;
};

function DayList(props: DayListProps): JSX.Element {
  const { onItemClick } = props;
  const daysInMonth = useMemo(() => getDaysInCurrentMonth(), []);

  const onDateClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>, item: Dayjs): void => {
      e.preventDefault();

      if (onItemClick) {
        onItemClick(item);
      }
    },
    []
  );

  return (
    <List display="flex" flexDirection="row" overflowY="scroll">
      {daysInMonth.map((day) => {
        return (
          <ListItem
            fontSize="24px"
            key={day.index}
            padding="16px"
            paddingX="32px"
            cursor="pointer"
            whiteSpace="nowrap"
            _hover={{
              bg: 'pink.300',
            }}
            onClick={(e) => onDateClick(e, day.date)}
          >
            {dayjs(day.date).format('MM-DD')}
          </ListItem>
        );
      })}
    </List>
  );
}

DayList.defaultProps = {
  onItemClick: undefined,
};

export default memo(DayList, isEqual);
