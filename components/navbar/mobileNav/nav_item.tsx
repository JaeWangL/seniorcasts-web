import { Flex, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { type NavItem } from '@constants/menu_constants';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

type MobileNavItemProps = {
  item: NavItem;
};

function MobileNavItem(props: MobileNavItemProps): JSX.Element {
  const { item } = props;

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={item.href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {item.labelKey}
        </Text>
      </Flex>
    </Stack>
  );
}

export default memo(MobileNavItem, isEqual);
