# Hog-Props-Intro

In this program, we have three components the App, the MasterHog, and the BabyHog. Your job is to display the MasterHog with its name, weight, and eye color as well as its Baby Hog components with their name, weight, and eye color.

The MasterHog passes down it's beauteous eye color gene as a prop to the BabyHog component. Although each BabyHog's eye color comes from the MasterHog, the BabyHogs should be able to change their weight independently. Additionally, the MasterHog should be able to change its eye color, which should then change the eye color of the BabyHogs.

Hint: the App component already imports the data for the BabyHog components. You need simply to pass it down as props to the next component in your program until you can use it to make BabyHogs.

## Directions:
  * Pass the information for the Offspring down as props to the next component to use to create BabyHog components
  * Use the radio buttons provided to alter the eye color state of the MasterHog component
  * Render the BabyHog components and their images based on the eye color prop from the MasterHog
  * Use state in the BabyHog component to change the image height of the Baby Hogs, and change the state accordingly when the increase or decrease buttons are clicked. (a good starting image height is '200px' and 10 is a good amount to increment/decrement.
