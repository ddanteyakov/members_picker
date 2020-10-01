import React from 'react';
import { useState } from 'react';
import { LeftSection } from './LeftSection';
import { Member } from '../models/member';
import { IMember } from '../types/IMember';
import { reverseMembers } from '../learning/reverseMembers';
import { sortMembers } from '../learning/sortMembers';

const defaultMembersLimit = 25;

export const Panel = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [assertedMembers, setAssertedMembers] = useState<IMember[]>([]);
    const [resultMembers, setResultMembers] = useState<IMember[]>([]);

    const addMember = (member: Member) => {
        if (!members.find(mb => mb.fullName === member.fullName)) {
            setMembers(members.concat(member));
        }
    }

    const calcResultMembers = () => {
        setResultMembers(sortMembers(reverseMembers(members)));
    }

    return <div>
        <div className="fialta-chose-header">
            <h1>Fialta Club</h1>
            <section>
                <input type="number" name="membersLimit" id="membersLimit" defaultValue={defaultMembersLimit} />
                <button onClick={calcResultMembers}>Do Magic</button>
                <button>Save result</button>
            </section>
        </div>
        <section className="lists">
            <aside>
                <LeftSection members={members} setMembers={setMembers} addMember={addMember} assertedMembers={assertedMembers} setAssertedMembers={setAssertedMembers} />
            </aside>
            <aside className='member-list'>
                <ol>
                    {members
                        .filter(member => resultMembers.some(mb => mb.fullName === member.fullName))
                        .map(member => <li key={member.fullName}>{member.fullName}</li>)
                    }
                </ol>
            </aside>
        </section>
    </div>
}