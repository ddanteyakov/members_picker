import { IMember } from '../IMember';
import { Member } from '../../models/member';

export interface MemberProps {
    member: Member;
    removeMember(member: IMember): void;
    asserted?: boolean;
    toggleAssertedMember(members: IMember): void;
}