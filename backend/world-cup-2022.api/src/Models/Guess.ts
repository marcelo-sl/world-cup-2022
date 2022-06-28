import { Entity } from './Entity';
import { GuessTypeEnum } from './GuessTypeEnum';

type GuessProps = {
    MatchId: string,
    Email: string,
    GuessType: GuessTypeEnum,
    Date: Date
}

export class Guess extends Entity<GuessProps> {
    private constructor(props: GuessProps, id?: string) {
        super(props, id);
    }
}