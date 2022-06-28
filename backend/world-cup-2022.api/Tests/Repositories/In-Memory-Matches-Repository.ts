import { Match } from "../../src/Domain/Models/Match";
import { MatchRepository } from "../../src/Domain/Repositories/MatchRepository";

export class InMemoryMatchRepository implements MatchRepository {
    public Matches: Match[] = [];

    async findById(id: string): Promise<Match | null> {
        const match = this.Matches.find(match => match.id === id);

        if (!match) return null;

        return match;
    }
}