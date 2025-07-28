import BookCard from '../components/BookCard';
import useBooks from '../hooks/useBooks';
import { Button } from '@/shared/components/ui/button';

const BookListPage: React.FC = () => {
	const { data, isLoading, isError } = useBooks();

	if (isLoading) return <div className="p-4">📚 Loading books...</div>;
	if (isError)
		return <div className="p-4 text-red-500">❌ Failed to load books.</div>;

	const renderBooks = () => {
		return data?.results.map((book) => <BookCard key={book.id} book={book} />);
	};

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Books</h2>
			<Button>Example</Button>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !important ">
				{renderBooks()}
			</div>
		</div>
	);
};

export default BookListPage;
