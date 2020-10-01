import { IMember } from './IMember';

export interface MembersBuilderConfoguration {
    includedMembers?: IMember[];
    includeAuthor?: boolean;
    firstTimeMembersLimit: number;
    missedClassesToDoubleChance: number;
}