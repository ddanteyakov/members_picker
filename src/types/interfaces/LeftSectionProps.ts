import { Member } from "../../models/member";
import { IMember } from "../IMember";

export interface LeftSectionProps {
    members: Member[];
    setMembers(member: Member[]): void;
    addMember(member: Member): void;
    assertedMembers: IMember[];
    setAssertedMembers(members: IMember[]): void;
}