import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Consumo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuarioId: number;

    @Column('float')
    quantidade: number;

    @Column({ type: 'date' })
    dataLeitura: Date;
}