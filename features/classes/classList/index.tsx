import { List } from '@chakra-ui/react';
import SkeltonList from '@components/skeletonList';
import { useGetClasses } from '@libs/hooks/api/get_classes';
import { type Dayjs } from 'dayjs';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

type ClassListProps = {
  selectedDate: Dayjs;
};

function ClassList(props: ClassListProps): JSX.Element {
  const { selectedDate } = props;
  const { data } = useGetClasses({ gteDate: selectedDate.toDate() });

  if (!data) {
    return <SkeltonList />;
  }
  return <List></List>;
}

export default memo(ClassList, isEqual);
