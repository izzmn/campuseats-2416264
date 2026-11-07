// QUESTION 3 · Equipment and favourites (hard, 25 marks) · every URL that starts with /q3
// App.jsx sends /q3 and everything under it here, so the paths below are RELATIVE to /q3.
// TODO I (1 mark): import Routes and Route from 'react-router', FavouritesProvider,
//   and the two page components Q3ItemList and Q3ItemDetail (all in this folder)

function Q3App() {
  return (
    // The provider wraps all the Q3 pages, so they share one favourites.
    <FavouritesProvider>
      {/* TODO 3 (3 marks): add <Routes> with two <Route>s:
            index        → <Q3ItemList />      (the page /q3)
            "item/:id"   → <Q3ItemDetail />    (the page /q3/item/5) */}
      <p className="muted">Routes not added yet.</p>
    </FavouritesProvider>
  )
}

export default Q3App
