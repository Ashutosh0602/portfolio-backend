import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CountSchema } from './count.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),MongooseModule.forFeature([{name:'CountModel',schema:CountSchema}]),MongooseModule.forRoot(`mongodb+srv://ashujn2del:${process.env.MONGO_PASS}@cluster0.3vadwff.mongodb.net/`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
