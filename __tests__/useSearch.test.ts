import { renderHook, act } from '@testing-library/react-native';
import { useSearch } from '@/app/useSearch';
import { getCharactersByName } from '@/api/people';

jest.mock('@/api/people');

describe('useSearch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('should fetch data and update state correctly when searchCharacter is called', async () => {
    const mockData = {
      results: [{ name: 'Luke Skywalker', eye_color: 'blue' }],
      count: 1,
    };

    (getCharactersByName as jest.Mock).mockResolvedValue(mockData);

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleTextChange('Luke');
    });

    await act(async () => {
      await result.current.searchCharacter();
    });


    expect(getCharactersByName).toHaveBeenCalledWith('Luke');
    expect(result.current.isFetching).toBe(false);
    expect(result.current.data).toEqual(mockData);
  })

  it('should update searchTerm when handleTextChange is called', () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleTextChange('Leia Organa');
    });

    expect(result.current.searchTerm).toBe('Leia Organa');
  });
})