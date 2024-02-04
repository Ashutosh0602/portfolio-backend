import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountDoc } from './count.entity';

@Injectable()
export class AppService {
  constructor(@InjectModel('CountModel') private readonly userDB:Model<CountDoc>){}

  async getHello(): Promise<string> {
    try {
      const count=await this.userDB.find({});
      let  sum =count[0].count+1;
      const up=await this.userDB.findOneAndUpdate({},{count:sum})
      
    } catch (error) {
      
    }
    return 'Thanks for visiting!';

  }
}
