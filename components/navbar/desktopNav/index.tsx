import {
  Box,
  Link,
  Popover,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { navMenuItems } from '@constants/menu_constants';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

function DesktopNav(): JSX.Element {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {navMenuItems.map((navItem) => (
        <Box key={navItem.labelKey}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.labelKey}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}

export default memo(DesktopNav, isEqual);
