import { Entity } from './Entity';
import { GuessTypeEnum } from './GuessTypeEnum';

type GuessProps = {
    matchId: string,
    email: string,
    guessType: GuessTypeEnum,
    date?: Date
}

export class Guess extends Entity<GuessProps> {
    private constructor(props: GuessProps, id?: string) {
        super(props, id);
    }

    static Create(props: GuessProps, id?: string) {
        return new Guess({
            ...props,
            date: props.date ?? new Date()
        }, id);
    }
}