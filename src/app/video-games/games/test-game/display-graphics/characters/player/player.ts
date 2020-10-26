import { Drawable } from "../../drawable";
import { Updatable } from "../updatable";
import { UpdatableCharacter } from '../updatable-character';

export class Player extends UpdatableCharacter implements Drawable, Updatable {
    positionX: number = 20;
    positionY: number = 20;
    speed: number = 3;
    moveLeft: boolean = false;

    draw(ctx: any) {
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.arc(20 + this.positionX, 30 + this.positionY, 20, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(5 + this.positionX, 50 + this.positionY, 30, 50);
    }
    update() {
        if(this.positionX > 500) {
            this.moveLeft = true;
        } else if (this.positionX < 1) {
            this.moveLeft = false;
        }

        if(this.moveLeft) {
            this.positionX -= this.speed;
        } else {
            this.positionX += this.speed;
        }
    }


}