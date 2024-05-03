import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CreateActorDto } from './actors.dto';

@Entity("actors")
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  constructor(actor?: CreateActorDto) {
    // Add constructor with CreateActorDto parameter
    if (actor != undefined && actor != null) {
      if (actor.name && actor.name != null) this.name = actor.name;
      if (actor.updated_at && actor.updated_at != null)
        this.updated_at = actor.updated_at;
    }
  }
}
