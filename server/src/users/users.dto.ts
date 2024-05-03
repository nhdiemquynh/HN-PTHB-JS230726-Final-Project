export class CreateUserDto {
  title: string;
  fullname: string;
  email: string;
  password: string;
  avatar: string;
  status: boolean;
  updated_at: Date;
}

export class UpdateUserDto {
  fullname: string;
  email: string;
  password: string;
  avatar: string;
  status: boolean;
  updated_at: Date;
}
