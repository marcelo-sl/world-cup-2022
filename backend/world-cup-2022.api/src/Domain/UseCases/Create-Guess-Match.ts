import { Guess } from "../Models/Guess";
import { GuessTypeEnum } from "../Models/GuessTypeEnum";
import { GuessRepository } from "../Repositories/GuessRepository";
import { MatchRepository } from "../Repositories/MatchRepository";

type CreateGuessMatchProps = {
    matchId: string,
    email: string,
    guessType: GuessTypeEnum
}

export class CreateGuessMatch {
    constructor(
        private matchRepository: MatchRepository,
        private guessRepository: GuessRepository
    ) { }

    async Execute({ matchId, email, guessType }: CreateGuessMatchProps) {
        const match = await this.matchRepository.findById(matchId);

        if (match === null) {
            throw new Error('Match does not exists.');
        }

        const guessEntity = await this.guessRepository.findByMatchIdAndEmail(matchId, email);

        if (guessEntity !== null) {
            throw new Error('Guess already exists.');
        }

        const guess = Guess.Create({
            matchId,
            email,
            guessType
        });

        return guess;
    }
}