export interface IQueryFilters {
  [key: string]:
    | string
    | {
        $regex: string;
        $options: string;
      };
}

export interface QueryOptions {
  limit: number;
  skip: number;
}
export interface IncomingQuery {
  limit?: string;
  offset?: string;
}

export interface QueryFilter {
  [key: string]: any;
}

export interface QueryBody {
  limit: number;
  offset: number;
}

export interface QueryMiddleware {
  queryFilters: IQueryFilters;
  queryOptions: QueryOptions;
}
