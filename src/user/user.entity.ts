export class UserEntity {
  constructor({ id, name, email, password }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  id: string;
  name: string;
  email: string;
  password: string;
}
