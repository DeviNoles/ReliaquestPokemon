# Devin Moure - Reliaquest Pokemon Assessment

![App Demo](https://github.com/DeviNoles/ReliaquestPokemon/blob/main/ui-assessment-pokedex-snr/public/readmeimages/fullapp.gif?raw=true)


## App-wide requirements:
- [X] Should use jss for all styling - no css files.
- [X] Must use TypeScript for all files

*Only Typescript files were used, along with JSS. The only CSS file used was the given, index.css*


## List Page:
- [X] Create list items that display the name, number, and types of each Pokémon
- [X] Each list item should also include a picture of the Pokémon (available through the api)
- [X] Each list item should have some hover effect

![Pokemon List Page with Hover Effect](https://github.com/DeviNoles/ReliaquestPokemon/blob/main/ui-assessment-pokedex-snr/public/readmeimages/pokemonlist.PNG?raw=true)
*List of Pokemon with their respective images, name, number, and a hover effect.*


## Searching on List Page
- [X] Implement a search box that filters the list of Pokémon
- [X] Should be case insensitive
- [X] List should only show Pokémon that match the search
- [X] Searching will be client side only and NOT server side

![Search Box](https://github.com/DeviNoles/ReliaquestPokemon/blob/main/ui-assessment-pokedex-snr/public/readmeimages/pokemonsearch.PNG?raw=true)

*Search is case insensitive and filters Pokemon in list on client side.*

## Dialog for Pokémon Details
- [X] Click on a list item and see a dialog/modal with that information.

- [X] The dialog/modal will be route dependent meaning that whether or not it's shown and what Pokémon's details it's showing is based on the route. This should use react-router.

![Responsive App](https://github.com/DeviNoles/ReliaquestPokemon/blob/main/ui-assessment-pokedex-snr/public/readmeimages/responsivepokemon.gif?raw=true)

<br>

## Issues & Solutions
* Issue 1  
When creating the router modal, pretty much every tutorial I found only showed how to do it on React Router V5. The code matched all the tutorials, even on the offical [React Router website](https://v5.reactrouter.com/web/example/modal-gallery). I asked in the Reactiflux Discord, someone told me that the error I showed them made it seem like I had a package out of date.

Turns out there were many changes in React Router V6 in relation to V5. One of these things that changed being that 'state' is a prop in <Link/>. I created my own modal that is routed from the Pokemon List component and needed a way to set the background of the page to the one we are currently at so the modal appears over it. After searching for a bit, [I found an article on StackOverflow of someone with the exact same issue](https://stackoverflow.com/questions/71375943/ts-error-object-literal-may-only-specify-known-properties-and-state-does-not).  
<br>


* Issue 2

Designing the features responsively, to fit on smaller screen sizes such as cell phones, was a bit challenging at first but I was able to learn a lot. I had originally done float: left and float: right to seperate the image from the context. Then after attempting to center the type text in their respective labels, nothing would happen and the text would stay where it was. I learned that this is because [the text isn't centered because the elements are floated, and floated elements "shrink" to the content, even if it's a block level element](https://stackoverflow.com/questions/10408072/text-aligncenter-doesnt-work).

I implemented Flexbox to design my layout.


# THANK YOU
