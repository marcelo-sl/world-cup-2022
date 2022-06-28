import { Entity } from "./Entity";
import { Team } from "./Team";

type MatchProps = {
    Team1: Team,
    Team2: Team,
    Date: Date
}

export class Match extends Entity<MatchProps> {
    private constructor(props: MatchProps, id?: string) {
        super(props, id);
    }
}