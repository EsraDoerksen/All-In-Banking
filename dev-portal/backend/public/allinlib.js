messageId = 0;
function nextMessageId() {
  return messageId++;
}

async function upsertDb(key, value) {
  return new Promise((res, rej) => {
    const mId = nextMessageId();

    const message = JSON.stringify({
      operation: 'sharedDBUpsert',
      key,
      value,
      messageId: mId,
    });
    window.parent.postMessage(message, '*');
    window.addEventListener('message', async function (event) {
      eData = JSON.parse(event.data);
      if (eData.messageId === mId) {
        res();
      }
    });
  });
}

async function listDb() {
  return new Promise((res, rej) => {
    const mId = nextMessageId();

    const message = JSON.stringify({
      operation: 'sharedDBList',
      messageId: mId,
    });
    window.parent.postMessage(message, '*');
    window.addEventListener('message', async function (event) {
      eData = JSON.parse(event.data);
      console.log('hier  ' + eData.messageId + '  ' + mId);
      if (eData.messageId === mId) {
        res(eData.list);
      }
    });
  });
}

async function account() {
  return new Promise((res, rej) => {
    const mId = nextMessageId();

    const message = JSON.stringify({
      operation: 'account',
      messageId: mId,
    });
    window.parent.postMessage(message, '*');
    window.addEventListener('message', async function (event) {
      eData = JSON.parse(event.data);
      if (eData.messageId === mId) {
        res(eData.account);
      }
    });
  });
}

async function user() {
  return new Promise((res, rej) => {
    const mId = nextMessageId();

    const message = JSON.stringify({
      operation: 'user',
      messageId: mId,
    });
    window.parent.postMessage(message, '*');
    window.addEventListener('message', async function (event) {
      eData = JSON.parse(event.data);
      if (eData.messageId === mId) {
        res(eData.user);
      }
    });
  });
}
