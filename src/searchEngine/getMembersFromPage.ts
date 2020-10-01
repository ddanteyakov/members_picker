import { IComment } from '../types/IComment';
import { IAttender } from '../types/IAttender';
import { MembersAudit } from '../models/membersAudit';
import { Member } from '../models/member';
import { getCommentsFromPage } from './getCommentsFromPage';

const plusRegExp = /^\+/;
const firstTimeRegExp = /first\s?time/i;

const membersAudit = MembersAudit.getInstance();

function filterInterestingComments(comments: IComment[]) {
    return comments.slice().filter(comment => plusRegExp.test(comment.text));
}

function removeRecurrenceComments(comments: IComment[]) {
    comments = comments.slice();
    const result: IComment[] = [];
    comments.reduce<any>((members, member) => {
        if (!members[member.fullName]) {
            members[member.fullName] = true;
            result.push(member);
        }
        return members;
    }, {});
    return result;
}

function evolveCommentsToAttenders(comments: IComment[]): IAttender[] {
    return comments.map(comment => ({ fullName: comment.fullName, firstTime: firstTimeRegExp.test(comment.text) }));
}

export function getMembersFromPage(): Member[] {
    const comments = getCommentsFromPage();
    const filteredComments = filterInterestingComments(comments);
    const unrepeatableComments = removeRecurrenceComments(filteredComments);
    const attenders = evolveCommentsToAttenders(unrepeatableComments);
    return attenders.map(attender => {
        const member = membersAudit.members.find(member => member.fullName === attender.fullName);
        if (member) {
            return member;
        }
        return new Member(attender);
    });
}