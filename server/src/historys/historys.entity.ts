import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CreateHistoryDto } from './historys.dto';

@Entity("historys")
export class History {
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

  constructor(history?: CreateHistoryDto) {
    // Add constructor with CreateHistoryDto parameter
    if (history != undefined && history != null) {
      if (history.user_id && history.user_id != null) this.user_id = history.user_id;
      if (history.movie_id && history.movie_id != null) this.movie_id = history.movie_id;
      if (history.updated_at && history.updated_at != null)
        this.updated_at = history.updated_at;
    }
  }
}
