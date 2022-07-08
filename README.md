# Color Flipper App

## Intro

This project is about building an interactive web page where one click on a button randomly change the background color, the hexadecimal color code is then displayed on the center of the screen. The twist here is the possibility to go to a second page offering the same deal but using the color named and rgb systems instead of the hexadecimal one.

It seems like a pretty basic and simple project which is exactly why i picked it. Seems to me like the perfect work to build some confidence, checking Html and Css basics plus dom manipulation on JavaScript. It's a small project, perfect to use as a base for more complex ones. That being said, let's dig in. In the following part, i'll note all the things i need to do to complete this project then in the last part i'll draw a conclusion on what i learned, what i think was ok and what went wrong.

One last thing, that project came from https://www.vanillajavascriptprojects.com/. I didn't checked the solution, i only wanted ideas but i feel like it's only fair to quote the source which, by the way, looks very clean and interesting from what i saw.

## Todo List

- HTML is very limited here, we have a navbar where are nested the title and two links, one for the hex mode the other for the rgb&sol;colored name one. Then it's all in the center of the screen with a centered container displaying the color used for the background and, just below it, the button to change it.

- JavaScript is the main actor on this project. First, i'm gonna build the hex system because i feel like it's the easiest part (could be totally wrong, we'll see):

  1. Listen to the button's click event to call a function containing our logic.
  2. Use DOM interface to access the body's document and change its background-color through the style property.
  3. Randomly generate a combinaison of 6 hexadecimal characters (0 to F) then use it as a value for the style property.

  Once the hex page is built, we can give a go to the rgb&sol;colored name page.

  4. There's 147 named colors in CSS (if i did my research right) and, even if it seems ridiculous and very time consuming, i like the thought to use all of them so we're gonna create an array with... well a lot of color names in it!
     EDIT: Thanks a lot to Bob Walton and his github repository proposing an array containing all the named colors! Bless you sir. Here's the link: https://gist.github.com/bobspace/2712980
  5. Then it's all about randomly picking one color and using it as background color.
  6. rgb is an additive system which combine three primary colors (red, green and blue) in different proportions (each have a value range between 0 and 255) to create one color so it's all about randomly choosing three numbers and concatenate them throught a template literals.
  7. Once we have a way to pick a named color or a rgb one, all that's left to do is randomly picking one of the two way and alter the text in the center of the page depending of the result.
  8. To resume part 4 to part 7, let's abuse Math.floor() and Math.random()!
  9. Some of the named colors, hex colors and rgb colors are so dark than it's really difficult to see the font so we're gonna create a fonction to add a CSS class to the body if the background-color is too dark. That CSS class will change the color propertie's value to a lighter one.

- CSS is kind of like a reward. After the 'function' comes the 'form'! Here's a small list of things to implement:
  - Navbar takes 100% width of the page, is slightly lighter than the main section and have a box shadow at the bottom.
  - Transparent button, change color and background color when hovering.
  - Specific font color for span element
  - ...

## Conclusion

I'm pretty satisfied with what i ended with. I don't feel like i learned a lot though because i used very basic concepts to complete the task. That being said, i don't think forcing oneself to use various ideas and mechanisms is a good approach. Mechanisms are tools and tools are useful in specific situations. What i mean is if you don't feel like you need it then you probably don't.
The main goal here was to gain some confidence and i think i reached it. Focusing on functionnality from the very start seems like the proper way to build. No point in making a beautiful app which doesn't work properly. My focus while coding was to separate as much logic as possible to make simple functions and keep the code clear&sol;easy to manage. Overall, for a first project hopefully followed by other daily ones, i think i did ok.
