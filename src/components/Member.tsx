import React from 'react';
import { MemberProps } from '../types/interfaces/MemberProps';
import { MembersAudit } from '../models/membersAudit';
import { useObservableModel } from '@art-forms/observable-react';

const membersAudit = MembersAudit.getInstance();

const Member = (props: MemberProps) => {
    const { member, removeMember, asserted, toggleAssertedMember } = props;
    const remove = () => {
        removeMember(member);
    }
    const toggleAsserted = () => {
        toggleAssertedMember(member);
    }
    return <div className="member">
        <span className="full-name">{member.fullName}</span>
        {member.firstTime
            ? <span className="first-time">first time</span>
            : <span className="missed-classes">
                missed classes: {member.missedClasses !== null ? member.missedClasses : '>' + membersAudit.getMaximumMissedClasses()}
            </span>
        }
        {!member.firstTime && <button className={asserted ? 'asserted-tick' : 'not-asserted-tick'} onClick={toggleAsserted}>&#10004;</button>}
        <button onClick={remove}>&#10060;</button>
    </div>
}
const ObservableMember = useObservableModel(Member);
export { ObservableMember as Member };