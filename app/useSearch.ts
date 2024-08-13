import { getCharactersByName } from '@/api/people';
import type { SwapiResponse } from '@/api/people';
import { useState } from 'react';

export const useSearch = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<SwapiResponse>();
  const [searchTerm, setSearchTerm] = useState('');

  const searchCharacter = async () => {
    setIsFetching(true);
    const res = await getCharactersByName(searchTerm);
    setData(res);
    setIsFetching(false);
  }

  const handleTextChange = (text: string) => {
    setSearchTerm(() => text);
  };

  return { isFetching, data, searchTerm, handleTextChange, searchCharacter };
}
