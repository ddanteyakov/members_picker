import { IMember } from "../types/IMember";
import { observable } from '@art-forms/observable';

type MemberArgument = Partial<Omit<IMember, 'fullName'>> & Pick<IMember, 'fullName'>;

@observable
export class Member implements IMember {
    firstTime: boolean;
    fullName: string;
    lastClass?: string;

    constructor(member: MemberArgument) {
        this.fullName = member.fullName;
        this.firstTime = !!member.firstTime;
        this.lastClass = member.lastClass;
    }

    get missedClasses(): number | null {
        return this.lastClass !== undefined ? this.calculateMissingClasses(this.lastClass) : null;
    }

    private daysToClasses(days: number) {
        let result = 0;
        while (days > 7) {
            result++;
            days -= 7;
        }
        if (days > 5.5) {
            result++;
        }
        return result;
    }

    private calculateMissingClasses(date: string): number {
        const lastDate = new Date(date);
        const daysDifference = (Date.now() - +lastDate) / (1000 * 3600 * 24);
        return this.daysToClasses(daysDifference);
    }
}