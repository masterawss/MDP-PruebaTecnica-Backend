import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import {ApplicationError} from '../customErrors/ApplicationError'

export const bodyRequestValidator =
  (schema: yup.ObjectSchema<any>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
      });
      next();
    } catch (error: any) {
      next(new ApplicationError(400, error.message, 'validation'));
    }
};