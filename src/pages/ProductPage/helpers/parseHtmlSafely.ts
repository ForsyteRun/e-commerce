import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const parseHtmlSafely = (html: string) => {
  const cleanHtml = DOMPurify.sanitize(html);
  return parse(cleanHtml);
};

export default parseHtmlSafely;
