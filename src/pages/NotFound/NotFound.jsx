import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <main className={css.wrapper}>
      <h1>404</h1>
      <p>Sorry, we couldn't find that page</p>
    </main>
  );
};

export default NotFound;
