import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
	it('should return hello world', () => {
		const hello = () => 'Hello world!';
		const result = hello();
		expect(result).to.equal('Hello world!');
	});
});
