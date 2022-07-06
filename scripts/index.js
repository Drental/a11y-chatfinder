Hooks.on("init", () => {
  // Binding with a default key and a simple callback
  const {SHIFT} = KeyboardManager.MODIFIER_KEYS;
  game.keybindings.register("a11y-chatfinder", "chatfinder", {
    name: "Chatfinder",
    hint: "Puts a cursor in the chat window and activates it.",
    editable: [
      {
        key: "KeyC",
        modifiers: [SHIFT]
      }
    ],
    onDown: async () => { 
      ui.sidebar.expand();
      ui.sidebar.activateTab("chat");
      await new Promise(resolve => {setTimeout(resolve, 50);});
      let element = $("#chat-message");
      element.focus();
      await new Promise(resolve => {setTimeout(resolve, 50);});
      element.val("");
    },
    onUp: () => {},
    restricted: false,
    reservedModifiers: [],
    precedence: CONST.KEYBINDING_PRECEDENCE.PRIORITY
  });
})
