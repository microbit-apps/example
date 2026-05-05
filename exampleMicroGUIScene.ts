namespace example_project {
  import AppInterface = user_interface_base.AppInterface
  import Screen = user_interface_base.Screen
  import GUIComponentAlignment = microgui.GUIComponentAlignment
  import TextBox = microgui.TextBox
  import GUIComponentScene = microgui.GUIComponentScene
  // import TextButtonCollection = microgui.TextButtonCollection
  // import TextButton = microgui.TextButton
  import GUIComponentAbstract = microgui.GUIComponentAbstract

  export class ExampleMicroGUIScene extends GUIComponentScene {
    constructor(app: AppInterface) {
      super({app, colour: 6}) // 6 = light blue w/ default palette

      const simpleTextComponent: GUIComponentAbstract = new TextBox({
        alignment: GUIComponentAlignment.BOT,
        isActive: false,
        title: "Title Text :)", // optional arg
        text: ["Press micro:bit A btn"], // optional arg
        colour: 6, // optional arg
        xScaling: 1.7, // optional arg
      });

      // Cast the object to access TextBox-specific properties
      (simpleTextComponent as TextBox).title = "hi";

      let count = 0;
      input.onButtonPressed(1, function () {
        count++;
        simpleTextComponent.clearContext()
        simpleTextComponent.addContext(["" + count])
      })

      this.components = [simpleTextComponent]
    }

    draw() {
      super.draw()
    }
  }
}
