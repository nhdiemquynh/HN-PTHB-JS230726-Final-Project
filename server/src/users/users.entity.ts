import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CreateUserDto } from './users.dto';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  constructor(user?: CreateUserDto) {
    // Add constructor with CreateUserDto parameter
    if (user != undefined && user != null) {
      if (user.fullname && user.fullname != null) this.fullname = user.fullname;
      if (user.email && user.email != null) this.email = user.email;
      if (user.updated_at && user.updated_at != null)
        this.updated_at = user.updated_at;
      if (user.password && user.password != null)
        this.password = user.password;
      if (user.avatar && user.avatar != null)
        this.avatar = user.avatar;
      if (user.status && user.status != null)
        this.status = user.status;
    }
  }
}
