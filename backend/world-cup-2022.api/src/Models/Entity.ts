import { v4 as uuid4 } from 'uuid';

export abstract class Entity<T> {
    protected _id: string;
    public props: T;

    constructor(props: T, id?: string) {
        this.props = props;
        this._id = id ?? uuid4();
    }
}