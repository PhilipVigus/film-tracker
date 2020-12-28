const app = require('../../app.js');
let event, context;

describe('Example test', () => {
    it('verifies successful response', async () => {
        const result = await app.lambdaHandler(event, context)
        const response = JSON.parse(result.body);

        expect(result.statusCode).toEqual(200);
        expect(response.message).toEqual("hello world");
    });
});
