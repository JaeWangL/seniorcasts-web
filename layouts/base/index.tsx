import { Box } from '@chakra-ui/react';
import Navbar from '@components/navbar';
import { NAVBAR_HEIGHT } from '@libs/styles/variables';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { BaseLayoutWrapper } from './styles';

type BaseLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <BaseLayoutWrapper>
      <Navbar />
      <Box paddingTop={NAVBAR_HEIGHT}>{children}</Box>
    </BaseLayoutWrapper>
  );
}

export default memo(BaseLayout, isEqual);
