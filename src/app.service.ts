import { Injectable } from '@nestjs/common';
import { allUsers,getLimitUsers } from "./repositories/user.repository"

@Injectable()
export class AppService {
  getallusers() {
    return allUsers();
  }

  getOneUser() {
    return allUsers();
  }

  getLimit( limit:number =200) {
    return  getLimitUsers(limit);
  }
}
