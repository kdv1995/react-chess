import { Figure, FigureNames } from "models/figures/Figure";
import blackLogo from "assets/black-king.png";
import whiteLogo from "assets/white-king.png";
import { Colors } from "models/Color";
import { Cell } from "models/Cell";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
}
