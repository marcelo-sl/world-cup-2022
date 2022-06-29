import { Entity } from "./Entity";

type TeamProps = {
    name: string,
    flagSource: string,
    groupId: string
}

export class Team extends Entity<TeamProps> {
    private constructor(props: TeamProps, id?: string) {
        super(props, id);
    }

    static Create(props: TeamProps, id?: string) {
        return new Team({
            ...props
        }, id);
    }
}