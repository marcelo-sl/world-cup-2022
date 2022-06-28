import { Entity } from "./Entity";
import { Team } from "./Team";

type MatchProps = {
    team1: Team,
    team2: Team,
    date: Date
}

export class Match extends Entity<MatchProps> {
    private constructor(props: MatchProps, id?: string) {
        super(props, id);
    }

    static Create(props: MatchProps, id?: string) {
        return new Match({
            ...props
        }, id);
    }
}