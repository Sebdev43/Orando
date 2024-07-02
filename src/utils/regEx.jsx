function formatBreadcrumbs(string) {
  // Step 1: Remove hyphens between words and replace with a space
  const noHyphens =
    string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, ' ');

  // Add an apostrophe after 'L' or 'l' when it is followed by a space and a letter
  const formattedText = noHyphens.replace(/\b([Ll])\s(\w)/g, "$1'$2");

  return formattedText;
}

export default formatBreadcrumbs;
