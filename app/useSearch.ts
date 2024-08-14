import { getCharactersByName } from '@/api/people';
import type { SwapiResponse } from '@/api/people';
import { useState } from 'react';
import { Keyboard } from 'react-native';

export const useSearch = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<SwapiResponse>();
  const [searchTerm, setSearchTerm] = useState('');
  const [isError, setIsError] = useState(false);

  const searchCharacter = async () => {
    try {
      setIsFetching(true);
      setIsError(false);
      const res = await getCharactersByName(searchTerm);
      setData(res);
      setIsFetching(false);
      Keyboard.dismiss();
    } catch(error) {
      setIsFetching(false);
      setIsError(true);
      console.error(error);
    }
  }

  const handleTextChange = (text: string) => {
    setSearchTerm(() => text);
  };

  return { isFetching, data, searchTerm, handleTextChange, searchCharacter, isError };
}
