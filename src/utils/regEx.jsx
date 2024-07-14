export function formatBreadcrumbs(string) {
  // Remove hyphens between words and replace with a space
  const noHyphens =
    string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, ' ');

  // Add an apostrophe after 'L' or 'l' when it is followed by a space and a letter
  return noHyphens.replace(/\b([Ll])\s(\w)/g, "$1'$2");
}

export function formatHikeTime(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours} h ${minutes} min`;
}

export function cutText(text) {
  // regex pour trouver les 15 premiers mots
  const regex = /^(\s*\S+\s*){15}/;

  // trouver et retourner les 15 premiers mots avec trois petits points à la fin
  const match = text.match(regex);
  return match ? match[0].trim() + '...' : text;
}
