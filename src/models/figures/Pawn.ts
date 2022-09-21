import { Figure, FigureNames } from "models/figures/Figure";
import { Colors } from "models/Color";
import { Cell } from "models/Cell";
import blackLogo from "assets/black-pawn.png";
import whiteLogo from "assets/white-pawn.png";

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }
}
