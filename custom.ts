namespace example_project {
  import Screen = user_interface_base.Screen
  import CursorScene = user_interface_base.CursorScene
  import Button = user_interface_base.Button
  import ButtonStyles = user_interface_base.ButtonStyles
  import AppInterface = user_interface_base.AppInterface

  export class SimpleCursorScene extends CursorScene {
    constructor(app: AppInterface) {
      super(app)
    }

    /* override */
    startup() {
      super.startup()
      this.navigator.setBtns([[
        new Button({
          parent: null,
          style: ButtonStyles.Transparent,
          icon: "linear_graph_1",
          ariaId: "Select me!",
          x: 0,
          y: 25,
          onClick: () => {
            this.app.pushScene(new ExampleScene(this.app))
          },
        })
      ]])
    }

    draw() {
      Screen.fillRect(
        Screen.LEFT_EDGE,
        Screen.TOP_EDGE,
        Screen.WIDTH,
        Screen.HEIGHT,
        12 // purple in default palette
      )

      this.navigator.drawComponents();
      super.draw()
    }
  }
}
