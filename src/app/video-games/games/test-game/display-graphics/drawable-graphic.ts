import { Drawable } from './drawable';

export abstract class DrawableGraphic implements Drawable{
    public abstract draw(ctx: any);
}