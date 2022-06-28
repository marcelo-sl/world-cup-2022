import { Entity } from "./Entity";
import { Match } from "./Match";
import { Team } from "./Team";


type GroupProps = {
    Name: string,
    Teams: Team[],
    Matches: Match[]
}

export class Group extends Entity<GroupProps> {
    private constructor(props: GroupProps, id?: string) {
        super(props, id);
    }
}