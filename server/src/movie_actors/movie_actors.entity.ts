import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CreateMovieActorDto } from './movie_actors.dto';

@Entity("movie_actors")
export class MoiveActor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_id: number;

  @Column()
  actor_id: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  constructor(movieActor?: CreateMovieActorDto) {

    // Add constructor with CreateActormovie_actorDto parameter
    if (movieActor != undefined && movieActor != null) {
      if (movieActor.updated_at && movieActor.updated_at != null)
        this.updated_at = movieActor.updated_at;
      if (movieActor.movie_id && movieActor.movie_id != null)
        this.movie_id = movieActor.movie_id;
      if (movieActor.actor_id && movieActor.actor_id != null)
        this.actor_id = movieActor.actor_id;
    }
  }
}
