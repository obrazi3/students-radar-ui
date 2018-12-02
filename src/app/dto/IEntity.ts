import { EntityType } from './entityType';

export interface IEntity {
    id: string;
    entityType: EntityType;
    title: string;
    urlToAvatar: string; // mb this field should be optional
}
