import { Entity } from "./Entity";
import { Match } from "./Match";
import { Team } from "./Team";


type GroupProps = {
    name: string,
    teams: Team[],
    matches: Match[]
}

export class Group extends Entity<GroupProps> {
    private constructor(props: GroupProps, id?: string) {
        super(props, id);
    }
}