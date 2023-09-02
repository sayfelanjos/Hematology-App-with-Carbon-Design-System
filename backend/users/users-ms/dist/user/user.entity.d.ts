export declare class User {
    id: number;
    googleId: number;
    email: string;
    password: string;
    verified_email: string;
    created_at: Date;
    modified_at: Date;
    revision: number;
    logInsert(): void;
    logUpdate(): void;
    logRemove(): void;
}
