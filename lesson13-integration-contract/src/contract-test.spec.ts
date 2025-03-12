import { Pact } from '@pact-foundation/pact';
import axios from 'axios';
import path from 'path';

const provider = new Pact({
    consumer: 'PetstoreClient',
    provider: 'PetstoreAPI',
    port: 1234,
    dir: path.resolve(__dirname, '../pacts'),
    log: path.resolve(__dirname, '../logs/pact.log')
});

describe('Pact Contract Test for Petstore API', () => {
    beforeAll(() => provider.setup());
    afterAll(() => provider.finalize());
    afterEach(() => provider.verify());

    test('should retrieve a pet by ID', async () => {
        const petId = 1001;

        await provider.addInteraction({
            state: 'a pet with ID 1001 exists',
            uponReceiving: 'a request for pet 1001',
            withRequest: {
                method: 'GET',
                path: `/v2/pet/${petId}`,
                headers: { Accept: 'application/json' }
            },
            willRespondWith: {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: {
                    id: petId,
                    name: 'Whiskers',
                    photoUrls: ['https://example.com/cat.jpg'],
                    status: 'available'
                }
            }
        });

        const response = await axios.get(`http://localhost:1234/v2/pet/${petId}`, {
            headers: { Accept: 'application/json' }
        });

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(petId);
        expect(response.data.name).toBe('Whiskers');
    });
});
