function getClick() {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  document.body.dispatchEvent(event);
}

export default getClick;
