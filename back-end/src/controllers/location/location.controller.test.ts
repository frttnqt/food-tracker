import { LocationController } from '@src/controllers';
import { Request, Response } from 'express';

test('<createLocation>', async () => {
	expect(await LocationController.createLocation({} as Request, {} as Response)).toBe('Hello world!');
});
