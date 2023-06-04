import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./entities/users.entity";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}
  async create(email: string, password: string) {
    const user = await this.find(email);
    if (user.length) {
      throw new BadRequestException("email in use");
    }
    const newUser = this.repo.create({ email, password: password });
    return this.repo.save(newUser);
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }
  async update(id: number, attrs: Partial<Users>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException("user not found");
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException("user not found");
    }
    return this.repo.remove(user);
  }
}
