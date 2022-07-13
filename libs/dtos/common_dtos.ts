export interface ClassDescriptionModel {
  readonly about: string;
  readonly whatLearn: string;
}

export interface ClassOwnerModel {
  readonly userId: string;
  readonly nickName: string;
  readonly avatarUrl: string;
}

export interface ClassUpcomingSessionModel {
  readonly startDate: Date;
}
