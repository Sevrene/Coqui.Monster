/**
 * Formats the background style based on the provided background settings.
 * @param {object} backgroundSettings - The background settings object.
 * @param {string} backgroundSettings.type - The type of background ('solid', 'gradient', 'transparent', 'image').
 * @param {object} backgroundSettings.colorSolid - The solid color object.
 * @param {string} backgroundSettings.colorSolid.hex - The hex value of the solid color.
 * @param {object} backgroundSettings.colorGradient - The gradient color object.
 * @param {string} backgroundSettings.colorGradient.direction - The direction of the gradient.
 * @param {object[]} backgroundSettings.colorGradient.colors - The array of color objects in the gradient.
 * @param {string} backgroundSettings.colorGradient.colors[].color.hex - The hex value of each color in the gradient.
 * @param {string} backgroundSettings.imageUrl - The URL of the background image.
 * @returns {string} The formatted background style.
 */
export function formatBackgroundStyle(backgroundSettings) {
  let background;

  switch (backgroundSettings.type) {
    case 'solid':
      background = backgroundSettings.colorSolid.hex;
      break;
    case 'gradient':
      const gradientColors = backgroundSettings.colorGradient.colors.map(
        (colorObj) => colorObj.color.hex
      );
      background = `linear-gradient(${
        backgroundSettings.colorGradient.direction
      }deg, ${gradientColors.join(', ')})`;
      break;
    case 'transparent':
      background = 'transparent';
      break;
    case 'image':
      background = `url(${backgroundSettings.imageUrl})`;
      break;
    default:
      console.error('Unknown background type:', backgroundSettings.type);
  }

  return background;
}
