import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import { IsInt, IsString, IsEmail, Min, Max, Length, IsNotEmpty, IsDefined, IsUUID } from 'class-validator';

import { compare, hash } from 'bcryptjs';

@Entity()
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsString()
    @Column('varchar', { length: 200, nullable: true })
    firstName: string;

    @IsString()
    @Column('varchar', { length: 200, nullable: true })
    lastName: string;

    @IsInt()
    @Column({ nullable: true })
    age: number;

    @IsNotEmpty()
    @IsEmail()
    @Column('varchar', { length: 200, unique: true })
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(6, 250)
    @Column('varchar', { length: 250 })
    password: string;

    @Column({ nullable: true, select: false })
    jwtToken: string;

    @IsNotEmpty()
    @IsInt()
    @Min(-1)
    @Max(1)
    @Column({ default: -1 })
    role: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    async hashPassword(): Promise<any> {
        this.password = await hash(this.password, 8);
    }

    async comparePassword(password: string): Promise<boolean> {
        const result = await compare(password, this.password);
        return result;
    }
}
