import { ScreenView, ScreenViewOptions } from "scenerystack/sim";
import { SimModel } from "../model/SimModel.js";
import { ResetAllButton } from "scenerystack/scenery-phet";

export class SimScreenView extends ScreenView {
  public constructor(model: SimModel, options?: ScreenViewOptions) {
    super(options);

    const resetAllButton = new ResetAllButton({
      listener: () => {
        this.interruptSubtreeInput();
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
  public step(_dt: number): void {
    // Called every frame, with the time since the last frame in seconds
  }
}
