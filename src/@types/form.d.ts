export type Errors = {
  nickname?: string;
  localisation?: string;
  email?: string;
  password?: string;
};

export type FormReinitData = {
  newPassword: string;
  token: string;
};

export type Credential = {
  nickname: string;
  localisation: string;
  email: string;
  password: string;
};

export type FormAccountData = {
  nickname: string;
  localisation: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
