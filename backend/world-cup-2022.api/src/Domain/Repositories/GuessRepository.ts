import { Guess } from "../Models/Guess";

export interface GuessRepository {
    findByMatchIdAndEmail(matchId: string, email: string): Promise<Guess | null>;
}