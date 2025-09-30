import { ScreenView, ScreenViewOptions } from "scenerystack/sim";
import { SimModel } from "../model/SimModel.js";
import { ResetAllButton } from "scenerystack/scenery-phet";
import { Rectangle, Text } from "scenerystack/scenery";

export class SimScreenView extends ScreenView {

  private readonly rotatingRectangle: Rectangle;

  public constructor(model: SimModel, options?: ScreenViewOptions) {
    super(options);

    // Sample Content

    this.rotatingRectangle = new Rectangle(-150, -20, 300, 40, {
      fill: "#ccc",
      translation: this.layoutBounds.center
    });
    this.addChild( this.rotatingRectangle );

    this.addChild( new Text("Content goes here", {
      font: "24px sans-serif",
      center: this.layoutBounds.center
    }) );

    const resetAllButton = new ResetAllButton({
      listener: () => {
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10,
    });
    this.addChild(resetAllButton);
  }

  public reset(): void {
    // Called when the user presses the reset-all button
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public step(dt: number): void {
    // Called every frame, with the time since the last frame in seconds

    this.rotatingRectangle.rotation += 2 * dt;
  }
}
