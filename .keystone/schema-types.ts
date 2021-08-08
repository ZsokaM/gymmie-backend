type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type SportClassRelateToOneInput = {
  readonly create?: SportClassCreateInput | null;
  readonly connect?: SportClassWhereUniqueInput | null;
  readonly disconnect?: SportClassWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly classes?: SportClassWhereInput | null;
  readonly classes_is_null?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'classes_ASC'
  | 'classes_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly classes?: SportClassRelateToOneInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly classes?: SportClassRelateToOneInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type UserRelateToManyInput = {
  readonly create?: ReadonlyArray<UserCreateInput | null> | null;
  readonly connect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type SportClassWhereInput = {
  readonly AND?: ReadonlyArray<SportClassWhereInput | null> | null;
  readonly OR?: ReadonlyArray<SportClassWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly freeSpots?: Scalars['Int'] | null;
  readonly freeSpots_not?: Scalars['Int'] | null;
  readonly freeSpots_lt?: Scalars['Int'] | null;
  readonly freeSpots_lte?: Scalars['Int'] | null;
  readonly freeSpots_gt?: Scalars['Int'] | null;
  readonly freeSpots_gte?: Scalars['Int'] | null;
  readonly freeSpots_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly freeSpots_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly week?: Scalars['Int'] | null;
  readonly week_not?: Scalars['Int'] | null;
  readonly week_lt?: Scalars['Int'] | null;
  readonly week_lte?: Scalars['Int'] | null;
  readonly week_gt?: Scalars['Int'] | null;
  readonly week_gte?: Scalars['Int'] | null;
  readonly week_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly week_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly day?: Scalars['String'] | null;
  readonly day_not?: Scalars['String'] | null;
  readonly day_contains?: Scalars['String'] | null;
  readonly day_not_contains?: Scalars['String'] | null;
  readonly day_starts_with?: Scalars['String'] | null;
  readonly day_not_starts_with?: Scalars['String'] | null;
  readonly day_ends_with?: Scalars['String'] | null;
  readonly day_not_ends_with?: Scalars['String'] | null;
  readonly day_i?: Scalars['String'] | null;
  readonly day_not_i?: Scalars['String'] | null;
  readonly day_contains_i?: Scalars['String'] | null;
  readonly day_not_contains_i?: Scalars['String'] | null;
  readonly day_starts_with_i?: Scalars['String'] | null;
  readonly day_not_starts_with_i?: Scalars['String'] | null;
  readonly day_ends_with_i?: Scalars['String'] | null;
  readonly day_not_ends_with_i?: Scalars['String'] | null;
  readonly day_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly day_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly startTime?: Scalars['String'] | null;
  readonly startTime_not?: Scalars['String'] | null;
  readonly startTime_contains?: Scalars['String'] | null;
  readonly startTime_not_contains?: Scalars['String'] | null;
  readonly startTime_starts_with?: Scalars['String'] | null;
  readonly startTime_not_starts_with?: Scalars['String'] | null;
  readonly startTime_ends_with?: Scalars['String'] | null;
  readonly startTime_not_ends_with?: Scalars['String'] | null;
  readonly startTime_i?: Scalars['String'] | null;
  readonly startTime_not_i?: Scalars['String'] | null;
  readonly startTime_contains_i?: Scalars['String'] | null;
  readonly startTime_not_contains_i?: Scalars['String'] | null;
  readonly startTime_starts_with_i?: Scalars['String'] | null;
  readonly startTime_not_starts_with_i?: Scalars['String'] | null;
  readonly startTime_ends_with_i?: Scalars['String'] | null;
  readonly startTime_not_ends_with_i?: Scalars['String'] | null;
  readonly startTime_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly startTime_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly teacher?: Scalars['String'] | null;
  readonly teacher_not?: Scalars['String'] | null;
  readonly teacher_contains?: Scalars['String'] | null;
  readonly teacher_not_contains?: Scalars['String'] | null;
  readonly teacher_starts_with?: Scalars['String'] | null;
  readonly teacher_not_starts_with?: Scalars['String'] | null;
  readonly teacher_ends_with?: Scalars['String'] | null;
  readonly teacher_not_ends_with?: Scalars['String'] | null;
  readonly teacher_i?: Scalars['String'] | null;
  readonly teacher_not_i?: Scalars['String'] | null;
  readonly teacher_contains_i?: Scalars['String'] | null;
  readonly teacher_not_contains_i?: Scalars['String'] | null;
  readonly teacher_starts_with_i?: Scalars['String'] | null;
  readonly teacher_not_starts_with_i?: Scalars['String'] | null;
  readonly teacher_ends_with_i?: Scalars['String'] | null;
  readonly teacher_not_ends_with_i?: Scalars['String'] | null;
  readonly teacher_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly teacher_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly duration?: Scalars['String'] | null;
  readonly duration_not?: Scalars['String'] | null;
  readonly duration_contains?: Scalars['String'] | null;
  readonly duration_not_contains?: Scalars['String'] | null;
  readonly duration_starts_with?: Scalars['String'] | null;
  readonly duration_not_starts_with?: Scalars['String'] | null;
  readonly duration_ends_with?: Scalars['String'] | null;
  readonly duration_not_ends_with?: Scalars['String'] | null;
  readonly duration_i?: Scalars['String'] | null;
  readonly duration_not_i?: Scalars['String'] | null;
  readonly duration_contains_i?: Scalars['String'] | null;
  readonly duration_not_contains_i?: Scalars['String'] | null;
  readonly duration_starts_with_i?: Scalars['String'] | null;
  readonly duration_not_starts_with_i?: Scalars['String'] | null;
  readonly duration_ends_with_i?: Scalars['String'] | null;
  readonly duration_not_ends_with_i?: Scalars['String'] | null;
  readonly duration_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly duration_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly users_every?: UserWhereInput | null;
  readonly users_some?: UserWhereInput | null;
  readonly users_none?: UserWhereInput | null;
};

export type SportClassWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortSportClassesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'freeSpots_ASC'
  | 'freeSpots_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'week_ASC'
  | 'week_DESC'
  | 'day_ASC'
  | 'day_DESC'
  | 'startTime_ASC'
  | 'startTime_DESC'
  | 'teacher_ASC'
  | 'teacher_DESC'
  | 'duration_ASC'
  | 'duration_DESC'
  | 'users_ASC'
  | 'users_DESC';

export type SportClassUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly freeSpots?: Scalars['Int'] | null;
  readonly status?: Scalars['String'] | null;
  readonly week?: Scalars['Int'] | null;
  readonly day?: Scalars['String'] | null;
  readonly startTime?: Scalars['String'] | null;
  readonly teacher?: Scalars['String'] | null;
  readonly duration?: Scalars['String'] | null;
  readonly users?: UserRelateToManyInput | null;
};

export type SportClassesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: SportClassUpdateInput | null;
};

export type SportClassCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly freeSpots?: Scalars['Int'] | null;
  readonly status?: Scalars['String'] | null;
  readonly week?: Scalars['Int'] | null;
  readonly day?: Scalars['String'] | null;
  readonly startTime?: Scalars['String'] | null;
  readonly teacher?: Scalars['String'] | null;
  readonly duration?: Scalars['String'] | null;
  readonly users?: UserRelateToManyInput | null;
};

export type SportClassesCreateInput = {
  readonly data?: SportClassCreateInput | null;
};

export type BookingWhereInput = {
  readonly AND?: ReadonlyArray<BookingWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BookingWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type BookingWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBookingsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC';

export type BookingUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
};

export type BookingsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BookingUpdateInput | null;
};

export type BookingCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
};

export type BookingsCreateInput = {
  readonly data?: BookingCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'classes'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly classes?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type SportClassListTypeInfo = {
  key: 'SportClass';
  fields:
    | 'id'
    | 'name'
    | 'freeSpots'
    | 'status'
    | 'week'
    | 'day'
    | 'startTime'
    | 'teacher'
    | 'duration'
    | 'users';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly freeSpots?: number | null;
    readonly status?: string | null;
    readonly week?: number | null;
    readonly day?: string | null;
    readonly startTime?: string | null;
    readonly teacher?: string | null;
    readonly duration?: string | null;
    readonly users?: string | null;
  };
  inputs: {
    where: SportClassWhereInput;
    create: SportClassCreateInput;
    update: SportClassUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: SportClassWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortSportClassesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type SportClassListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    SportClassListTypeInfo,
    SportClassListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  SportClassListTypeInfo,
  SportClassListTypeInfo['fields']
>;

export type BookingListTypeInfo = {
  key: 'Booking';
  fields: 'id' | 'name' | 'description';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
  };
  inputs: {
    where: BookingWhereInput;
    create: BookingCreateInput;
    update: BookingUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BookingWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBookingsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BookingListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BookingListTypeInfo,
    BookingListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BookingListTypeInfo,
  BookingListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly SportClass: SportClassListTypeInfo;
  readonly Booking: BookingListTypeInfo;
};
