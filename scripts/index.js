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
    onDown: () => { canvas.tokens._hover.actor.toggleCondition('flat-footed') },
    onUp: () => {},
    restricted: false,
    reservedModifiers: [],
    requiredModifiers: ["SHIFT"],
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
  });
})
