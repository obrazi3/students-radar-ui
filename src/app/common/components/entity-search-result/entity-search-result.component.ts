import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { SearchableEntitie, EntityType } from '../../../dto';

@Component({
    selector: 'sr-entity-search-result',
    templateUrl: './entity-search-result.component.html',
    styleUrls: ['./entity-search-result.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntitySearchResultComponent {
    @Input() entity: SearchableEntitie;

    public getEntityInfo(entity: SearchableEntitie): string {
        switch (entity.entityType) {
            case EntityType.Students:
                return `${entity.faculty.displayName} | ${entity.specialty} | ${entity.group.name} | ${entity.status}`;
            default:
                return 'No information';
        }
    }

    public getEntityInfoTitle(entity: SearchableEntitie): string {
        switch (entity.entityType) {
            case EntityType.Students:
                return (
                    `Faculty: ${entity.faculty.displayName}` +
                    '\n' +
                    `Speciality: ${entity.specialty}` +
                    '\n' +
                    `Group: ${entity.group.name}` +
                    '\n' +
                    `Status: ${entity.status}`
                );
            default:
                return 'No information';
        }
    }
}
