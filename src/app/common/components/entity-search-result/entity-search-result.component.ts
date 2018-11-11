import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { SearchableEntity, EntityType, IStudent } from '../../../dto';

@Component({
    selector: 'sr-entity-search-result',
    templateUrl: './entity-search-result.component.html',
    styleUrls: ['./entity-search-result.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntitySearchResultComponent {
    @Input() entity: SearchableEntity;

    public getEntityInfo(entity: SearchableEntity): string {
        switch (entity.entityType) {
            case EntityType.Students:
                return this.getStudentInfo(entity);
            default:
                return 'No information';
        }
    }

    public getEntityInfoTitle(entity: SearchableEntity): string {
        switch (entity.entityType) {
            case EntityType.Students:
                return this.getStudentInfoTitle(entity);
            default:
                return 'No information';
        }
    }

    private getStudentInfo(student: IStudent): string {
        return `${student.faculty.displayName} | ${student.specialty} | ${student.group.name} | ${student.status}`;
    }

    private getStudentInfoTitle(student: IStudent): string {
        return (
            `Faculty: ${student.faculty.displayName}` +
            '\n' +
            `Speciality: ${student.specialty}` +
            '\n' +
            `Group: ${student.group.name}` +
            '\n' +
            `Status: ${student.status}`
        );
    }
}
