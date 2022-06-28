import { Guess } from "../../src/Domain/Models/Guess";
import { GuessRepository } from "../../src/Domain/Repositories/GuessRepository";

export class InMemoryGuessRepository implements GuessRepository {
    public Guess: Guess[] = [];

    async findByMatchIdAndEmail(matchId: string, email: string): Promise<Guess | null> {
        const guess = this.Guess.find(guess => guess.props.matchId === matchId &&
            guess.props.email === email);

        if (!guess) return null;

        return guess;
    }
}