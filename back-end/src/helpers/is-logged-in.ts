import { NextFunction, Request, Response } from 'express';
import { keys } from '@src/config';

const jwt = require('jsonwebtoken');

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
	const token = req.headers?.auth;
	token
		? jwt.verify(token, keys.jsonWebTokenKey, (err: Error) => (err ? res.sendStatus(401) : next()))
		: res.sendStatus(401);
}
