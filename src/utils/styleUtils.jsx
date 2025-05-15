export function formatBackgroundStyle(backgroundSettings) {
  let background;

  switch (backgroundSettings.type) {
    case 'none':
      background = 'transparent';
      break;
    case 'solid':
      background = backgroundSettings.color.color;
      break;
    case 'gradient':
      const gradientColors = backgroundSettings.gradient.colors.map(
        (colorObj) => {
          const baseColor = colorObj.color.color;
          const formattedTransparency =
            colorObj.transparency?.toString().padStart(2, '0') ?? '';

          return `${baseColor}${formattedTransparency} ${colorObj.position}%`;
        }
      );

      background = `linear-gradient(${
        backgroundSettings.gradient.angle
      }deg, ${gradientColors.join(', ')})`;

      break;
    default:
      console.error('Unknown background type:', backgroundSettings.type);
  }

  return background;
}
