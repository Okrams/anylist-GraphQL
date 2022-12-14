import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity({name: 'items'})
@ObjectType()
export class Item {

    @PrimaryGeneratedColumn('uuid')
    @Field( () => ID )
    id: string;

    @Column()
    @Field( () => String )
    name: string;

    // @Field( () => Float )
    // @Column()
    // quantity: number;

    @Column({nullable: true})
    @Field( () => String, {nullable: true} )
    quantityUnits?: string; // g, ml, kg

    @ManyToOne( () => User, (user) => user.items,{nullable: false, lazy: true})
    @Index('userId-index')
    @Field( () => User )
    user: User;

}
