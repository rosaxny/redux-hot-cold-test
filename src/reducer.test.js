import gameReducer from './reducer';
import { generateAuralUpdate, restartGame, makeGuess } from './actions';

describe('gameReducer', () => {
    it('should set the initial state when nothing is passed in', () => {
        const state = gameReducer(undefined, { type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
    });

    it('should return the current state on an unknown action', () => {
        let currentSate = {};
        const state = gameReducer(currentSate, { type: '__UNKNOWN' });
        expect(state).toBe(currentSate);
    });

    describe('restartGame', () => {
        it('should restart the game', () => {
            let state = {
                guesses: [0,2,3],
                feedback: 'ok',
                correctAnswer: 5
            };
            const correctAnswer = 7;
            state = gameReducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.correctAnswer).toEqual(correctAnswer);
            expect(state.auralStatus).toEqual('');
        });
    });

    describe('makeGuess', () => {
        it('should make a guess', () => {
            // let state = gameReducer(undefined, makeGuess(5));
            // expect(state.guess).toEqual(5);
        });
    });

    // describe('generateAuralUpdate', () => {
    //     it('should generate aural updates', () => {
    //         let state;

    //     });
    // });
});