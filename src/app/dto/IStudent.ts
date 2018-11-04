export interface IStudent {
    birthday: number;
    course: number;
    faculty: string;
    fullName: string;
    gender: Gender;
    group: string; // mb this type will be replaced
    haveBenefits: boolean;
    lastSessionGPA: number;
    location: string;
    scholarship: number;
    specialty: string;
    status: StudentStatus;
    studyForm: StudyForm;
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

export enum StudyForm {
    Paid = 'paid',
    Free = 'free',
}
