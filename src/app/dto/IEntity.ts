import { EntityType } from './entityType';

export interface IEntity {
    entityType: EntityType;
    title: string;
    urlToAvatar: string; // mb this field should be optional
}
