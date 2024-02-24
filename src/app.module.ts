import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/db';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dbConfig)
    // MongooseModule.forRoot(process.env.MONGO_URL,{
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true,
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
