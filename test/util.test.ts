import { dogsSlug, add } from '../src/util.js';

describe('dogsSlug', () => {
	it('should match "i-love-dogs"', () => {
		expect(dogsSlug).toEqual('i-love-dogs');
	});
});

describe('add()', () => {
	it('should add 1 + 4', () => {
		expect(add(1, 4)).toEqual(5);
	});
});
