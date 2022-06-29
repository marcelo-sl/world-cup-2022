import { InMemoryGuessRepository } from "../../../tests/Repositories/In-Memory-Guess-Repositories";
import { InMemoryMatchRepository } from "../../../tests/Repositories/In-Memory-Matches-Repository";
import { GuessTypeEnum } from "../Models/GuessTypeEnum";
import { Match } from "../Models/Match";
import { Team } from "../Models/Team";
import { CreateGuessMatch } from "./Create-Guess-Match";

describe('Create guess match use case', () => {
    it('should be able to create a new guess match', async () => {
        const matchRepository = new InMemoryMatchRepository();
        const guessRepository = new InMemoryGuessRepository();
        const createGuessMatch = new CreateGuessMatch(matchRepository, guessRepository);

        const match = Match.Create({
            team1: Team.Create({
                name: 'Team One',
                abbreviation: 'T1',
                flagSource: 'flag-team-one.svg',
                groupId: 'group-id'
            }),
            team2: Team.Create({
                name: 'Team Two',
                abbreviation: 'T2',
                flagSource: 'flag-team-two.svg',
                groupId: 'group-id'
            }),
            date: new Date()
        })

        matchRepository.Matches.push(match);

        const response = await createGuessMatch.Execute({
            matchId: match.id,
            email: 'fake-email',
            guessType: GuessTypeEnum.Team1Win
        });

        expect(response).toBeTruthy();
    });
});