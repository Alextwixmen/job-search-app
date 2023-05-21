const divideFavoritesVacancies = (vacancy) => {
  if (!localStorage.getItem('favoritesVacancies')) {
    localStorage.setItem('favoritesVacancies', JSON.stringify([[vacancy]]));
  } else {
    const favoritesVacancies = JSON.parse(
      localStorage.getItem('favoritesVacancies')
    );
    if (
      favoritesVacancies.length === 0 ||
      favoritesVacancies[favoritesVacancies.length - 1].length === 4
    ) {
      favoritesVacancies.push([vacancy]);
    } else {
      favoritesVacancies[favoritesVacancies.length - 1].push(vacancy);
    }
    localStorage.setItem(
      'favoritesVacancies',
      JSON.stringify(favoritesVacancies)
    );
  }
};

export default divideFavoritesVacancies;
