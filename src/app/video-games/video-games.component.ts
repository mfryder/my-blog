import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { TestGame } from './games/test-game/test-game';

@Component({
    selector: 'video-games',
    templateUrl: './video-games.component.html',
    styleUrls: ['./video-games.component.scss']
  })
export class VideoGamesComponent implements OnInit, AfterViewInit {
    @ViewChild('gamecanvas') canvas: ElementRef;

    public ctx: any;

    constructor() {

    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        let rect = this.canvas.nativeElement.parentNode.getBoundingClientRect();
        this.canvas.nativeElement.width = rect.width;
        this.canvas.nativeElement.height = rect.height;
        let game = new TestGame();
        game.runGame(this.ctx, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    }
}