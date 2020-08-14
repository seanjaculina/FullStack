export const onHandleCountChange = (setCount, count, name) => {
  // name is the e.target.name property of the event object that exists on the particular button pressed in the UI
  switch (name) {
    case 'increment':
      setCount(count + 1);
      break;
    case 'decrement':
      setCount(count - 1);
      break;
    case 'reset':
      setCount(count - count);
      break;
    default:
      return;
  }
};