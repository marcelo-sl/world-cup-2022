import { Match } from "../Models/Match";

export interface MatchRepository {
    findById(id: string): Promise<Match | null>;
}