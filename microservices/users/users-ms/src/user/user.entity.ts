import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterRemove,
  AfterUpdate,
  AfterInsert,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  PrimaryColumn,
} from "typeorm";
import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({ nullable: true }) googleId: number;

  @Column() email: string;

  @Column() @Exclude() password: string;

  @Column({ nullable: true }) verified_email: string;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() modified_at: Date;

  @VersionColumn({ nullable: true }) revision: number;

  @AfterInsert()
  logInsert() {
    console.log("Insert User with id", this.id);
  }
  @AfterUpdate()
  logUpdate() {
    console.log("Update User with id", this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log("Removed User with id", this.id);
  }
}
