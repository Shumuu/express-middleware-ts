import { Request, RequestHandler } from 'express';
import { IQueryFilters, IncomingQuery, QueryBody, QueryFilter, QueryMiddleware, QueryOptions } from '../types/middleware';

const stepOne: RequestHandler<{}, {}, QueryBody> = async (req: Request<{}, {}, {}, IncomingQuery>, res, next) => {
  const offset = req.query.offset;
  const limit = req.query.limit;

  req.body = {
    offset: !offset ? 0 : parseInt(offset, 10),
    limit: !limit ? 20 : parseInt(limit, 10),
    ...req.body,
  };
  next();
};

const stepTwo: RequestHandler<{}, {}, QueryBody, QueryMiddleware> = async (req: Request<{}, {}, QueryBody, QueryMiddleware>, res, next) => {
  let filters: IQueryFilters = {};
  const body = req.body;

  const options: QueryOptions = {
    limit: body.limit,
    skip: body.offset,
  };

  req.query.queryFilters = filters;
  req.query.queryOptions = options;
  next();
};

// How would I properly type this, so I'd get the proper typings in a route ?
// When I ignore the error, it is properly typed ...
// @ts-ignore
const queryOptionsMiddleware: RequestHandler<any, any, QueryBody, QueryMiddleware, any> = [stepOne, stepTwo];

export default queryOptionsMiddleware;
