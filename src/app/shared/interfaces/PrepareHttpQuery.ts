import { IQueryOptions } from './IQueryOptions';
import * as qs from 'qs';
import * as _ from 'lodash';

export const PrepareHttpQuery = (options?: IQueryOptions, addQueryPrefix: boolean = true): string => {
  const query:any = {};
  query['tamanhoPagina'] = _.get(options, 'tamanhoPagina', 15);
  query['pagina'] = _.get(options, 'pagina', 1);
  query['ordenar'] = _.get(options, 'ordenar');
  const pesquisa:any = _.get(options, 'pesquisa', {});
  Object.keys(pesquisa).forEach(key =>
    query[key] = pesquisa[key]
  );
  return qs.stringify(query, { addQueryPrefix });
};
