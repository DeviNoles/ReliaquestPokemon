# Devin Moure - Reliaquest Pokemon Assessment

## App-wide requirements:
- [X] Should use jss for all styling - no css files.
- [X] Must use TypeScript for all files

*Only Typescript files were used, along with JSS. The only CSS file used was the given, index.css*

## List Page:
- [X] Create list items that display the name, number, and types of each Pokémon
- [X] Each list item should also include a picture of the Pokémon (available through the api)
- [X] Each list item should have some hover effect

*List of Pokemon with their respective images, name, number, and a hover effect.*

## Searching on List Page
- [X] Implement a search box that filters the list of Pokémon
- [X] Should be case insensitive
- [X] List should only show Pokémon that match the search
- [X] Searching will be client side only and NOT server side


*Search is case insensitive and filters Pokemon in list on client side.*





## Issues & Solutions
* Issue 1
When creating the router modal, pretty much every tutorial I found only showed how to do it on React Router V5. The code matched all the tutorials, even on the offical [React Router website](https://v5.reactrouter.com/web/example/modal-gallery). I asked in the Reactiflux Discord, someone told me that the error I showed them made it seem like I had a package out of date.

Turns out there were many changes in React Router V6 in relation to V5. One of these things that changed being that 'state' is a prop in <Link/>. After searching for a bit, [I found an article on StackOverflow of someone with the exact same issue](https://stackoverflow.com/questions/71375943/ts-error-object-literal-may-only-specify-known-properties-and-state-does-not).

Additional Todo
- [X] Pokemon list ui
- [X] hover pokemon ui
- [X] Fix broken list ui
- [X] fix image zlevel
- [X] search ui
- [ ] pokedex modal ui
- [X] modal pop up
- [ ] Pokemon Description api
- [ ] fix where modal pops up
 --------
- [ ] Flexbox ui
- [ ] Comment and organize code
- [X] title on page
- [X] ~hosting~
- [ ] update readme
- [ ] gif
- [ ] invite to repo
- [ ] ???
