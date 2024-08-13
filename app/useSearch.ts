import { getCharactersByName } from '@/api/people';
import type { SwapiResponse } from '@/api/people';
import { useState, useEffect } from 'react';

export const useSearch = (name: string) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<SwapiResponse>();

  const searchCharacter = async () => {
    setIsFetching(true);
    const res = await getCharactersByName(name);
    setData(res);
    setIsFetching(false);
  }

  useEffect(() => {
    searchCharacter();
  },[name])

  return { isFetching, data };
}
