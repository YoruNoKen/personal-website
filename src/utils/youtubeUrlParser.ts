export default function parser(url: string) {
  // eslint-disable-next-line
  const regExp = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  const match = url.match(regExp);
  return match && match[6].length > 8 ? match[6] : false;
}
