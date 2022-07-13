import { type ClassInfoDTO } from '@libs/dtos/class_dtos';
import { getClassesAsync } from '@libs/services/class_service';
import { type InfiniteData, useInfiniteQuery } from 'react-query';

export interface GetClassesProps {
  gteDate?: Date;
}

export interface GetClassesType {
  isLoading: boolean;
  data?: InfiniteData<ClassInfoDTO>;
}

export function useGetClasses(props: GetClassesProps): GetClassesType {
  const { gteDate } = props;
  const { data, isLoading } = useInfiniteQuery<ClassInfoDTO>(
    'as',
    getClassesAsync()
  );

  return {
    isLoading,
    data,
  };
}
