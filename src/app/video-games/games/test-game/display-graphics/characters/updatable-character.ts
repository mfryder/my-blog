import { Updatable } from './updatable';
import { DrawableGraphic } from '../drawable-graphic';

export abstract class UpdatableCharacter extends DrawableGraphic implements Updatable {
    public abstract update();
}