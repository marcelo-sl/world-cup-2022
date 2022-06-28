import { Entity } from "./Entity";

type TeamProps = {
    Name: string,
    Abbreviation: string,
    FlagSource: string,
    GroupId: string
}

export class Team extends Entity<TeamProps> {
    private constructor(props: TeamProps, id?: string) {
        super(props, id);
    }
}