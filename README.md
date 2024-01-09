# Color Changing Webpage

This project is a simple webpage that changes its background color when a button is clicked. The color format can be toggled between RGB and Hex.

## JavaScript Code Overview

The JavaScript code for this project consists of several functions and event listeners:

1. `getRand()`: This function generates a random number between 0 and 255. It's used to create random RGB color values.

2. `getRGBA()`: This function calls `getRand()` three times to generate an RGB color string.

3. `changeColor()`: This function is attached to the button click event. It generates a new color using `getRGBA()`, updates the color text on the webpage, and changes the background color of the main section.

4. `changeNameFormat(e)`: This function is attached to the button group click event. It toggles the active link and changes the color format displayed on the webpage.

5. `RGBAToHexA(rgba, forceRemoveAlpha = false)`: This function converts RGBA color values to Hex color values.

## How to Run

Open the HTML file in your web browser. Click the button to change the background color. Click the links in the button group to change the color format.

## Working Example

You can check out a working example of this project [here](https://b-isroiljon.github.io/color-flipper/).

## Future Improvements

- Add more color formats.
- Improve the UI/UX.

## License

This project is licensed under the MIT License.
