import { add } from '../src/util.js';

describe('add()', () => {
	it('should add 1 + 4', () => {
		expect(add(1, 4)).toEqual(5);
	});
});
