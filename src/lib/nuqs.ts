'use client';

import { useSearchParams } from 'next/navigation';
import { useQueryStates, parseAsString } from 'nuqs';
import { createSerializer, type inferParserType } from 'nuqs/server';

const queryParams = {
  search: parseAsString.withDefault(''),
  category: parseAsString.withDefault(''),
};

const useQueryParams = () => {
  return useQueryStates(queryParams);
};

const serialize = createSerializer(queryParams);

function usePersistedSearchParamsLink(
  base: string,
  values: Partial<inferParserType<typeof queryParams>> = {}
) {
  const searchParams = useSearchParams();
  return base + serialize(searchParams, values);
}

export { useQueryParams, usePersistedSearchParamsLink };
