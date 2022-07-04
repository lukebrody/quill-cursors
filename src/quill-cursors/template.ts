import Cursor from './cursor';

const template = `
  <span class="${Cursor.SELECTION_CLASS}"></span>
  <span class="${Cursor.CARET_CONTAINER_CLASS}">
    <span class="${Cursor.CARET_CLASS}"></span>
  </span>
`;

export default template;
