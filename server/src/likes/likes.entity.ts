import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CreateLikeDto } from './likes.dto';

@Entity("likes")
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  movie_id: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  constructor(like?: CreateLikeDto) {
    // Add constructor with CreateLikeDto parameter
    if (like != undefined && like != null) {
      if (like.updated_at && like.updated_at != null)
        this.updated_at = like.updated_at;
      if (like.user_id && like.user_id != null)
        this.user_id = like.user_id;
      if (like.movie_id && like.movie_id != null)
        this.movie_id = like.movie_id;
    }
  }
}
