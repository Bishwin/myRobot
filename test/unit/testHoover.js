const expect = require('chai').expect;
const Hoover = require('../../app/services/hoover.service');

describe('When the robot is not against a wall', () => {

    let input;

    beforeEach(() => {
        input = {
            roomSize: [5, 5],
            coords: [3, 3],
            patches: [[1, 0]]
        };
    });

    it('should move 1 position NORTH', () => {
        input.instructions = 'N';
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.coords).to.deep.equal([3, 4]);
    });

    it('should move 1 position EAST', () => {
        input.instructions = 'E';
        console.log(input);
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.coords).to.deep.equal([4, 3]);
    });

    it('should move 1 position SOUTH', () => {
        input.instructions = 'S';
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.coords).to.deep.equal([3, 2]);
    });

    it('should move 1 position WEST', () => {
        input.instructions = 'W';
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.coords).to.deep.equal([2, 3]);
    });
});

describe('When the robot against a wall', () => {

    let input;

    beforeEach(() => {
        input = {
            roomSize: [5, 5],
            patches: [[1, 0]]
        };
    });

    it('should not move NORTH', () => {
        input.coords = [3, 5];
        input.instructions = 'N';
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.coords).to.deep.equal([3, 5]);
    });

    it('should not move EAST', () => {
        input.coords = [5, 3];
        input.instructions = 'E';
        console.log(input);
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.coords).to.deep.equal([5, 3]);
    });

    it('should not move SOUTH', () => {
        input.coords = [3, 0];
        input.instructions = 'S';
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.coords).to.deep.equal([3, 0]);
    });

    it('should not move WEST', () => {
        input.coords = [0, 3];
        input.instructions = 'W';
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.coords).to.deep.equal([0, 3]);
    });
});

describe('cleaning tests', () => {

    let input;

    beforeEach(() => {
        input = {
            roomSize: [5, 5],
            coords: [0, 0],
            patches: [[0, 1]],
            instructions: 'N'
        };
    });

    it('should clean dirty patch to the north', () => {
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.patches).to.equal(1);
    });

    it('should not clean a patch twice', () => {
        input.instructions = 'NNS';
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.coords).to.deep.equal([0,1]);
        expect(hooverOutput.patches).to.equal(1);
    });


});

describe('running test', () => {

    let input;

    beforeEach(() => {
        input = {
            roomSize: [5, 5],
            coords: [1, 2],
            patches: [
                [1, 0],
                [2, 2],
                [2, 3]
            ],
            instructions: 'NNESEESWNWW'
        };
    });

    it('should clean 1 patch based on input', () => {
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.patches).to.equal(1);
    });

    it('should finish on position [1,3] based on input', () => {
        const hoover = new Hoover(input);
        const hooverOutput = hoover.run();
        expect(hooverOutput.coords).to.deep.equal([1,3]);
    });


});