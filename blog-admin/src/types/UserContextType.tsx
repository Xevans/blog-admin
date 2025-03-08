import { User } from "firebase/auth";

// defines any functions or data types that will be contained.
export type UserContextType = {
    user: User | null;
}