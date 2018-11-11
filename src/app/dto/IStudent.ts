import { IEntity } from './IEntity';

export interface IStudent extends IEntity {
    birthday: number;
    course: number;
    faculty: IFaculty;
    courseworkTeacher: any; // this type must be replaced
    fullName: string;
    gender: Gender;
    group: any; // this type must be replaced
    hasPrivileges: boolean;
    lastSessionGPA: number;
    location: string;
    scholarship: number;
    specialty: string;
    status: StudentStatus;
    studyForm: StudyForm;
}

export interface IFaculty {
    name: string;
    displayName: string;
}

export enum Gender {
    Male = 'male',
    Female = 'female',
}

export enum StudentStatus {
    Study = 'study',
    AcademicVacation = 'academic vacation',
    Debt = 'debt',
}

export enum StudentStatusClasses {
    Study = 'ic-checkmark good',
    AcademicVacation = 'ic-pause normal',
    Debt = 'ic-notification bad',
}

export enum StudyForm {
    Paid = 'paid',
    Free = 'free',
}
