import { FialtaClubAttendanceProvider } from '../localStorageProvider/FialtaClubAttendnece';
import { IMembersProvider } from '../types/IMembersProvider';
import { Member } from './member';

export class MembersAudit {
    private provider: IMembersProvider;
    public members!: Member[];

    private constructor() {
        this.provider = new FialtaClubAttendanceProvider();
        this.initMembers();
    }
    private static instance: MembersAudit;
    static getInstance(): MembersAudit {
        if (!MembersAudit.instance) {
            MembersAudit.instance = new MembersAudit();
        }
        return MembersAudit.instance;
    }

    private initMembers() {
        this.provider.getMembers()
            .then(members => {
                this.members = members.map(member => {
                    return new Member({ ...member, firstTime: false });
                });
            });
    }

    public getMaximumMissedClasses() {
        return this.members.reduce<any>((maxMissedClasses: number | undefined, member) => {
            if (maxMissedClasses === undefined) {
                return member.missedClasses;
            }
            if (member.missedClasses === null) {
                return maxMissedClasses;
            }
            return member.missedClasses > maxMissedClasses ? member.missedClasses : maxMissedClasses;
        }, undefined);
    }

    public saveChosenMembers(members: Member[]) {
        members.forEach(member => {
            const foundMember = this.members.find(mb => {
                if (mb.fullName === member.fullName) {
                    return true;
                }
            });
            if (foundMember) {
                foundMember.lastClass = new Date().toISOString();
            } else {
                this.members.push(new Member({
                    fullName: member.fullName,
                    lastClass: new Date().toISOString()
                }))
            }
        })
        this.provider.setMembers(this.members);
    }
}