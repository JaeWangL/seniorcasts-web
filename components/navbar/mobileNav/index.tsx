import { Stack, useColorModeValue } from '@chakra-ui/react';
import { navMenuItems } from '@constants/menu_constants';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import MobileNavItem from './nav_item';

function MobileNav(): JSX.Element {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {navMenuItems.map((navItem) => (
        <MobileNavItem key={navItem.labelKey} item={navItem} />
      ))}
    </Stack>
  );
}

export default memo(MobileNav, isEqual);
