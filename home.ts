namespace example_project {
  import Screen = user_interface_base.Screen
  import CursorScene = user_interface_base.CursorScene
  import Button = user_interface_base.Button
  import ButtonStyles = user_interface_base.ButtonStyles
  import AppInterface = user_interface_base.AppInterface
  import font = user_interface_base.font

  import ExampleScene = example_project.ExampleScene

  export class Home extends CursorScene {
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

    private drawVersion() {
      const font = bitmaps.font5
      const text = "v0.0.1"
      Screen.print(
        text,
        Screen.RIGHT_EDGE - (font.charWidth * text.length),
        Screen.BOTTOM_EDGE - font.charHeight - 2,
        0xb,
        font
      )
    }

    private yOffset = -Screen.HEIGHT >> 1
    draw() {
      Screen.fillRect(
        Screen.LEFT_EDGE,
        Screen.TOP_EDGE,
        Screen.WIDTH,
        Screen.HEIGHT,
        0xc
      )

      const microbitLogo = icons.get("microbitLogo")
      const microdataLogo = icons.get("microdataLogo")

      this.yOffset = Math.min(0, this.yOffset + 2)
      const t = control.millis()
      const dy = this.yOffset == 0 ? (Math.idiv(t, 800) & 1) - 1 : 0
      const margin = 2
      const OFFSET = (Screen.HEIGHT >> 1) - microdataLogo.height - margin - 9
      const y = Screen.TOP_EDGE + OFFSET //+ dy

      Screen.drawTransparentImage(
        microdataLogo,
        Screen.LEFT_EDGE + ((Screen.WIDTH - microdataLogo.width) >> 1)// + dy
,
        y + this.yOffset
      )

      Screen.drawTransparentImage(
        microbitLogo,
        Screen.LEFT_EDGE +
        ((Screen.WIDTH - microbitLogo.width) >> 1) + dy
        ,
        y - microdataLogo.height + this.yOffset + margin
      )

      if (!this.yOffset) {
        const flavourText = "Let's make an app!"
        Screen.print(
          flavourText,
          Screen.LEFT_EDGE +
          ((Screen.WIDTH + microdataLogo.width) >> 1)
          + dy
          -
          font.charWidth * flavourText.length,
          Screen.TOP_EDGE +
          OFFSET +
          microdataLogo.height +
          dy +
          this.yOffset +
          3,
          0xb,
          font
        )
      }

      this.navigator.drawComponents();
      this.drawVersion()
      super.draw()
    }
  }
}
