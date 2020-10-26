import { Player } from './display-graphics/characters/player/player';
import { UpdatableCharacter } from './display-graphics/characters/updatable-character';

export class TestGame {

    private ctx: any;
    private endGame: boolean = false;
    private lastRender: number = 0;
    private characters: UpdatableCharacter[] = [];
    private player = new Player();
    private canvasWidth: number = 0;
    private canvasHeight: number = 0;

    runGame(ctx: any, width: number, height: number): void {
        this.ctx = ctx;
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.characters.push(this.player);
        window.requestAnimationFrame(this.loop.bind(this));
    }

    update(progress: any): void {
        this.characters.forEach((char: UpdatableCharacter) => {
            char.update();
        })
    }

    draw(ctx: any): void {
        this.characters.forEach((char: UpdatableCharacter) => {
            char.draw(ctx);
        })
    }

    public loop(timestamp) {
        let progress = timestamp - this.lastRender
        
        this.update(progress)
        this.ctx.clearRect(0,0,this.canvasWidth, this.canvasHeight);
        this.draw(this.ctx)
      
        this.lastRender = timestamp
        if (!this.lastRender) {
            this.lastRender = 0;
        }
        window.requestAnimationFrame(this.loop.bind(this))
    }
}