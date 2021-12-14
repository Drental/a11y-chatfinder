Hooks.on("init", () => {
  // Binding with a default key and a simple callback
  game.keybindings.register("a11y-chatfinder", "chatfinder", {
    name: "Chatfinder",
    hint: "Puts a cursor in the chat window and activates it.",
    editable: [
      {
        key: "C"
      }
    ],
    onDown: () => { 
      let element = $("#chat-message");
      element.focus();
      await new Promise(resolve => {setTimeout(resolve, 50);});
      element.val("");
    },
    onUp: () => {},
    restricted: false,
    reservedModifiers: [],
    requiredModifiers: ["SHIFT"],
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
  });
})
