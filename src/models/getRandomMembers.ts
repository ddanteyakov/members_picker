import { IMember } from "../types/IMember";

export function getRandomMembers(members: IMember[], limit: number, recurrentKey?: string) {///// bug here!!!!
    const result = [];
    let iteration = members.length;
    if (members.length <= limit) {
        return members;
    }
    while (limit--) {
        let x = Math.floor(Math.random() * iteration--);
        result.push(members[x]);
        members.splice(x, 1);
        if (recurrentKey && (members[x] as any)[recurrentKey]) {
            members.forEach((member, i) => {
                if (member.fullName === members[x].fullName) {
                    members.splice(i, 1);
                    iteration--;
                }
            })
        }
        members = members.slice();
    }
    return result;
}