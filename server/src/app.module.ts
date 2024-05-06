import { Category } from './categories/categories.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/movies.entity';
import { UsersModule } from './users/users.module';
import { LikesModule } from './likes/likes.module';
import { CategoriesModule } from './categories/categories.module';
import { HistorysModule } from './historys/historys.module';
import { ActorsModule } from './actors/actors.module';
import { moviveActorModule } from './movie_actors/movie_actors.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MoviesModule,
    UsersModule,
    LikesModule,
    CategoriesModule,
    HistorysModule,
    ActorsModule,
    moviveActorModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'movies_db',
      entities: [Movie],
      synchronize: true,
      autoLoadEntities: true,
    })
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
