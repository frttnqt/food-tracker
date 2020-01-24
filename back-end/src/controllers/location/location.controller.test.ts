import { LocationController } from '@src/controllers';
import { LocationService } from '@src/services/location';
import * as httpMocks from 'node-mocks-http';

describe('<LocationController>', () => {
	test('<createLocation> success', async () => {
		jest.spyOn(LocationService, 'createLocation').mockReturnValue({ a: 1 } as any);
		const mockedResponse = httpMocks.createResponse();
		jest.spyOn(mockedResponse, 'send');
		await LocationController.createLocation(httpMocks.createRequest(), mockedResponse);
		expect(mockedResponse.send).toHaveBeenCalledWith({ a: 1 });
	});

	test('<createLocation> nil response from DB', async () => {
		jest.spyOn(LocationService, 'createLocation').mockImplementationOnce(() => undefined as any);
		const mockedResponse = httpMocks.createResponse();
		jest.spyOn(mockedResponse, 'sendStatus');
		await LocationController.createLocation(httpMocks.createRequest(), mockedResponse);
		expect(mockedResponse.sendStatus).toHaveBeenCalledWith(400);
	});

	test('<createLocation> error', async () => {
		jest.spyOn(LocationService, 'createLocation').mockImplementationOnce(() => Promise.reject('fail'));
		const mockedResponse = httpMocks.createResponse();
		jest.spyOn(mockedResponse, 'sendStatus');
		await LocationController.createLocation(httpMocks.createRequest(), mockedResponse);
		expect(mockedResponse.sendStatus).toHaveBeenCalledWith(400);
	});
});
