import { IMember } from "./IMember";

export interface IMembersProvider {
    getMembers(): Promise<IMember[]>;
    setMembers(members: IMember[]): Promise<void>;
}