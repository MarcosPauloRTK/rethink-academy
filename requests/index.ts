const getValues = async () => {
  const url = `https://swapi.dev/api/people/1`;
  const result = await fetch(url)
    .then((request) => request.json())
    .then((object: { films: string[]; name: string }) => {
      return {
        name: object.name,
        films: object.films,
        // films: getFilms(object.films),
      };
    });

  return result;
};

const getFilmTitle = async (url: string) => {
  return await fetch(url)
    .then((response: Response) => response.json())
    .then(({ title }) => title);
};

const getFilms = async (filmsArray: string[]) => {
  const filmsTitle = await Promise.all(
    filmsArray.map(
      async (link: string) =>
        await fetch(link)
          .then((response: Response) => response.json())
          .then(
            (object: { title: string; [prop: string]: string }) => object.title
          )
    )
  ).then((value) => value);

  return filmsTitle;
};

/**
 * [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/'
  ]
 */

const result = async () => {
    
  console.log(await getFilmTitle("https://swapi.dev/api/films/1/"));
};

result()
