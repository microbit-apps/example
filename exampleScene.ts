namespace example_project {
  import Screen = user_interface_base.Screen
  import Scene = user_interface_base.Scene
  import AppInterface = user_interface_base.AppInterface

  export class ExampleScene extends Scene {
    constructor(app: AppInterface) {
      super(app)
    }

    draw() {
      Screen.fillRect(
        Screen.LEFT_EDGE,
        Screen.TOP_EDGE,
        Screen.WIDTH,
        Screen.HEIGHT,
        0x6
      )

      super.draw()
    }
  }
}
