import { Box, List, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

type SkeltonListProps = {
  count?: number;
};

function SkeltonList(props: SkeltonListProps): JSX.Element {
  const { count } = props;

  return (
    <List>
      {Array.from({ length: count! }, (_, __) => {
        return (
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        );
      })}
    </List>
  );
}

SkeltonList.defaultProps = {
  count: 10,
} as SkeltonListProps;

export default memo(SkeltonList, isEqual);
