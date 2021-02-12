const RPC = require("discord-rpc")
const RPC = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Put the Details of your Custom Rich Presence here.",
        state: "Put the State of your Custom Rich Presence here.",
        startTimestamp: new Date(),
        largeImageKey: "Put the Large Image Key of your Application in Developer Portal.",
        largeImageText: "Put the text do you want to use in your Large Image here.",
        smallImageKey: "Put the Small Image Key of your Application in Developer Portal.",
        smallImageText: "Put the text do you want to use in your Small Image here."
    });
    
    console.log("Rich Presence is Running !")
});

rpc.login({
    clientId: "Put the Client ID of your Application of the Developer Portal here."
});  
