import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";

interface Credentials {
  email: string;
  password: string;
  verificationString: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(email, password): Promise<User> {
    const user: User[] = await this.find(email);
    if (user.length) {
      throw new BadRequestException("email in use");
    }
    const newUser: User = this.userRepository.create({
      email,
      password: password,
    });
    return this.userRepository.save(newUser);
  }

  findOne(id: number): Promise<User> {
    if (!id) {
      return null;
    }
    return this.userRepository.findOneBy({ id });
  }

  find(email: string): Promise<User[]> {
    return this.userRepository.find({ where: { email } });
  }
  async update(id: number, attrs: Partial<User>): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException("user not found");
    }
    Object.assign(user, attrs);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException("user not found");
    }
    return this.userRepository.remove(user);
  }
}
