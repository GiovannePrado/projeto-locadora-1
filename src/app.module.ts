import { Module } from '@nestjs/common';
import { FilmeModule} from './usuario/Filme.module';


@Module({
  imports: [FilmeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
