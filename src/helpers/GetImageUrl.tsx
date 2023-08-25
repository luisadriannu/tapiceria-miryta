export function GetImageUrl(name: string) {
  return new URL(`../assets/${name}.jpg`, import.meta.url).href;
}
