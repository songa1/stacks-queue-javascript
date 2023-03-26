const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = '';
};

const generateListQueue = () => {
  // ... your code goes here
  queueUL.innerHTML = '';
  const queueItems = queue.display();
  for (let i = 0; i < queueItems.length; i++) {
    const newLI = document.createElement('li');
    newLI.innerText = queueItems[i];
    queueUL.appendChild(newLI);
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerText = 'Queue underflow';
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.style.display = 'block';
    warningTopQueue.innerText = 'Queue overflow';
  }
};

const addToQueue = () => {
  try {
    // ... your code goes here
    const value = queueInput.value;
    if (!value) return;

    if (!queue.canEnqueue()) {
      generateWarningQueue('overflow');
      return;
    }

    queue.enqueue(value);
    generateListQueue();
    clearQueueInput();
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningQueue('overflow');
    console.log(error);
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    queue.dequeue();
    generateListQueue();
    generateWarningQueue();
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningQueue('underflow');
    console.log(error);
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
