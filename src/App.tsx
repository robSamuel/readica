import { Navigate, Route, Routes, } from 'react-router-dom';
import BookListPage from '@/features/books/pages/BookListPage';
import Header from '@/shared/components/Header';

const App: React.FC = () => (
	<div className="min-h-screen bg-background text-foreground">
		<Header />
		<main className="p-4">
			<Routes>
				<Route path="/" element={<BookListPage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</main>
	</div>
)

export default App;
