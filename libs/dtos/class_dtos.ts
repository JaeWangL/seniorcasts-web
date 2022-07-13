import type {
  ClassDescriptionModel,
  ClassOwnerModel,
  ClassUpcomingSessionModel,
} from './common_dtos';

export interface ClassInfoDTO {
  readonly classId: string;
  readonly title: string;
  readonly about: ClassDescriptionModel;
  readonly profileUrl: string;
  readonly owner: ClassOwnerModel;
  readonly upcomingSession: ClassUpcomingSessionModel;
}
