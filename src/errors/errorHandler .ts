import { NextFunction, Request, Response } from 'express';

interface IError{
	message: string,
}
export function errorHandler(err: IError, req: Request, res: Response, next: NextFunction) {
	if (res.headersSent) {
		return next(err);
	}

	return res.status(404).send({
		error: err.message,
	});
}
