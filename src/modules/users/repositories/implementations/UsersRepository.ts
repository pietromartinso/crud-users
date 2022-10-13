import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    Object.assign(user, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date()
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const user = this.users.find((_user) => _user.id == id)

    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = this.users.find((_user) => _user.email == email)

    return user;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const userIndex = this.users.indexOf(receivedUser);

    this.users[userIndex].admin = true;

    return this.users[userIndex];
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
