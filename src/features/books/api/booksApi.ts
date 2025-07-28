import { axiosInstance } from '../../../shared/lib/axios';
import type { GutendexResponse } from '../types/book.types';

export const getBooks = async (
	page = 1,
	searchTerm = '',
): Promise<GutendexResponse> => {
	const searchParam = searchTerm
		? `&search=${encodeURIComponent(searchTerm)}`
		: '';
	const { data } = await axiosInstance.get(`/books?page=${page}${searchParam}`);

	return data;
};
