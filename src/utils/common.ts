/**
 * This function scrolls to a specific section of a webpage with a smooth animation when clicked.
 * @param {string} section - The `section` parameter is a string that represents the ID of the HTML
 * element that we want to scroll into view when the `onClickToSection` function is called.
 */

export const onClickToSection = (section: string) => {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
}
