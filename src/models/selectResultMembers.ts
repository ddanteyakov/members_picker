import { getRandomMembers } from './getRandomMembers';
import { IMember } from '../types/IMember';

export const maxFirstTimeMembers = 15;
///// bug in getRandomMembers!!!
export const selectResultMembers = (limit: number, allMembers: IMember[], assertedMembers?: IMember[]): IMember[] => {
    const firstTimeMembers = allMembers.filter(member => member.firstTime);
    const members = allMembers.filter(member => !assertedMembers || !assertedMembers.some(mb => mb.fullName === member.fullName)).filter(member => !member.firstTime);
    const resultFirstTimeMembers = getRandomMembers(firstTimeMembers, maxFirstTimeMembers);
    let resultMembersLimit = limit;
    if (assertedMembers) {
        resultMembersLimit -= assertedMembers.length;
    }
    if (resultFirstTimeMembers) {
        resultMembersLimit -= resultFirstTimeMembers.length;
    }
    const result = getRandomMembers(members, resultMembersLimit);
    return result.concat(firstTimeMembers, assertedMembers || []);
}