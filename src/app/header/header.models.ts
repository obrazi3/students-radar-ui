import { EntityType } from '../dto';

interface NavigationDashboard {
    title: string;
    route: string;
    entityType: EntityType;
}

// this array can grow over time
export const navigationDashboards: NavigationDashboard[] = [
    { title: 'STUDENTS', route: 'students', entityType: EntityType.Students },
    { title: 'TEACHERS', route: 'teachers', entityType: EntityType.Teachers },
    { title: 'SUBJECTS', route: 'subjects', entityType: EntityType.Subjects },
    { title: 'GROUPS', route: 'groups', entityType: EntityType.Groups },
    { title: 'ADMIN', route: 'admin', entityType: EntityType.Admin },
];

export interface HeaderState {
    activeDashboard: EntityType;
}
