import { localStorageHelper } from './localStorageHelper/localStorageHelper';
import { IMembersProvider } from '../types/IMembersProvider';
import { IMember } from '../types/IMember';

const FialtaClubKey = 'FIALTA_CLUB_ATTENDANCE';

export class FialtaClubAttendanceProvider implements IMembersProvider {
    members: IMember[];

    constructor() {
        this.members = localStorageHelper.get(FialtaClubKey);
        if (!Array.isArray(this.members)) {
            this.members = [];
        }
    }

    private save() {
        localStorageHelper.save(FialtaClubKey, this.members);
    }

    public async getMembers() {
        return this.members;
    }

    public async setMembers(members: IMember[]) {
        this.members = members;
        this.save();
    }
}