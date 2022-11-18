# UI Assessment - Pokédex (Senior)
This is a small application that will leverage various frontend technologies to assess your aptitude. This is a take home assignment and can be done at your own pace. Your recruiter will communicate with you when you should turn this assessment in.

## Requirements

### Leveraging Open API GraphQL 
In this assessment you will utilize a Pokémon open API (GraphQL). This will help show knowledge and aptitude with graphql which ReliaQuest heavy leverages.

[API Docs](https://wayfair.github.io/dociql/)

Apollo Client Config - `src/app/client.ts`

---
### App-wide requirements
1. Should use jss for all styling - no css files. `<PokemonList />` (`src/components/PokemonList/PokemonList.tsx`) already does this. Feel free to use this component as an example of how to implement jss. _All styling contexts are already provided and implemented for you_
1. Must use TypeScript for all files

---
### List Page
In this assessment you will expand the existing list page with the following. You will need to retrieve more data from the useGetPokemons (src/hooks/useGetPokemons.ts) hook where the graphql query is defined.

1. Create list items that display the name, number, and types of each Pokémon
1. Each list item should also include a picture of the Pokémon (available through the api)
1. Each list item should have some hover effect

---
### Searching on List Page
In order for a user to be able to find a Pokémon quickly, they should be able to search on the Pokémon list page and see filtered results based on their search.

1. Implement a search box that filters the list of Pokémon
1. Should be case insensitive
1. List should only show Pokémon that match the search
1. **Searching will be client side only and NOT server side** -- The api does not support search

---
### Dialog for Pokémon Details
When a user wants to see more information about a Pokémon, they should be able to click on a list item and see a dialog/modal with that information. Feel free to use any 3rd party component library for the dialog/modal so you don't have to worry about building one. The [Mui Dialog](https://mui.com/components/dialogs/) is a good option if you don't already have on you like.

1. The dialog/modal will be route dependent meaning that whether or not it's shown and what Pokémon's details it's showing is based on the route. This should use `react-router`. React router is already set up in the app.
1. What additional you display and how you display it is up to you.
1. When the dialog/modal appears, a new data hook will be used to grab the details for a single Pokémon. This should be done using this graphql query
```gql
query pokemon($id: String, $name: String){
  pokemon(id: $id, name: $name){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
```

---

## Useful Tools
- [Apollo Docs](https://www.apollographql.com/docs/react/)
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [React Router Docs](https://reactrouter.com/docs/en/v6)
- [MUI component library (optional)](https://mui.com/getting-started/usage/)
