import consumer from "./consumer"

const chatChannel = consumer.subscriptions.create({ channel: "ChatChannel", room: "Best Room" }, {
  received(data) {
    // data => { sent_by: "Paul", body: "This is a cool chat app." }
    console.log(data);
  }
});

window.chatChannel = chatChannel;

// chatChannel.send({ sent_by: "Paul 1", body: "This is a cool chat app." });
// chatChannel.send({ sent_by: "Paul 2", body: "This is a cool chat app." });
// chatChannel.send({ sent_by: "Paul 3", body: "This is a cool chat app." });
// chatChannel.send({ sent_by: "Paul 4", body: "This is a cool chat app." });
