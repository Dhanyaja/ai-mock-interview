import type { FieldValue, Timestamp } from "firebase/firestore";

export interface User {
    id: string,
    name: string,
    email: string,
    imageUrl: string,
    createdAt: Timestamp | FieldValue,
    updateAt: Timestamp | FieldValue,
}