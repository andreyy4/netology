const ChatApp  = require("./chatapp");
const VK_MAX = 2;

let chatOnMessage = (message) => {
    console.log(message);
};

let readyToAnswerMessage = (message) => {
    chatOnMessage('Готовлюсь к ответу');
};

let vkChatClose = () => {
    chatOnMessage('Чат вконтакте закрылся :(');
};

// VK
let vkChat = new ChatApp('---------vk');
vkChat.setMaxListeners(VK_MAX);
vkChat.on('message', chatOnMessage);
vkChat.on('message', readyToAnswerMessage);
vkChat.on('close', vkChatClose);
vkChat.close();

setTimeout(() => {
    console.log('Закрываю вконтакте...');
    vkChat.removeListener('message', chatOnMessage);
}, 10000);

// webinar
let webinarChat = new ChatApp('webinar');
webinarChat.on('message', chatOnMessage);
webinarChat.on('message', readyToAnswerMessage);

setTimeout(() => {
    console.log('CLOSE Webinar');
    webinarChat.removeListener('message', chatOnMessage);
}, 30000);

// facebook
let facebookChat = new ChatApp('=========facebook');
facebookChat.on('message', chatOnMessage);

setTimeout(() => {
    console.log('Закрываю фейсбук, все внимание — вебинару!');
    facebookChat.removeListener('message', chatOnMessage);
}, 15000);


