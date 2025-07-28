import type { Book } from '../types/book.types';

interface BookCardProps {
	book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
	const authorNames = book.authors?.map((author) => author.name).join(', ');
	const language =
		book.languages?.map((language) => language).join(', ') || 'Unknown';
	const coverImage =
		book.formats['image/jpeg'] || book.formats['image/png'] || '';
	const downloadLink =
		book.formats['text/html'] || book.formats['text/plain; charset=utf-8'];

	return (
		<div className="border rounder-md p-4 shadow-sm hover:shadow-md transition">
			{coverImage && (
				<img
					src={coverImage}
					alt={`Cover for ${book.title}`}
					className="w-full h-60 object-cover rounder-md mb-3"
				/>
			)}
			<h3 className="text-lg font-semibold">{book.title}</h3>
			<p className="text-sm text-muted-foreground">{authorNames}</p>
			<p className="text-xs text-muted-foreground mt-1">Language: {language}</p>
			<p className="text-xs text-muted-foreground">
				Downloads: {book.download_count}
			</p>

			{downloadLink && (
				<a
					href={downloadLink}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block mt-3 text-sm font-medium text-primary underline"
				>
					Read Online
				</a>
			)}
		</div>
	);
};

export default BookCard;
