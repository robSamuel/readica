export interface GutendexResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  subjects: string[];
  formats: Record<string, string>;
  bookshelves: string[];
  languages: string[];
  download_count: number;
  copyright: boolean | null;
}

export interface Author {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}
