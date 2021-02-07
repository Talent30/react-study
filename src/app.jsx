import './styles.css';

const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
    title: 'The Vanishing Half: A Novel',
    author: 'Brit Bennett',
  },
];

function App() {
  return (
    <section className="grid w-full max-w-screen-xl gap-8 mx-auto my-20 md:grid-cols-3">
      {books.map((book) => (
        <Book key={book.id} book={book}>
          {' '}
        </Book>
      ))}
    </section>
  );
}

const clickHandler = () => {
  alert('hello world');
};

const Book = (propos) => {
  const { img, title, author } = propos.book;

  return (
    <article className="px-8 py-4 rounded-2xl">
      <img src={img} alt="" />
      <h1 className="mt-2">{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickHandler}>
        Reference
      </button>
    </article>
  );
};

export default App;
