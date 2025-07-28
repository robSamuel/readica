import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../api/booksApi';
import type { GutendexResponse } from '../types/book.types';

const useBooks = (page = 1, searchTerm = '') => {
	return useQuery<GutendexResponse>({
		queryKey: ['books', page, searchTerm],
		queryFn: () => getBooks(page, searchTerm),
		staleTime: 1000 * 60 * 5,
	});
};

export default useBooks;
