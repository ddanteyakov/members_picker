import React, { useState } from 'react';
import { Member } from './Member';
import { Member as MemberModel } from '../models/member';
import { MembersAudit } from '../models/membersAudit';
import { LeftSectionProps } from '../types/interfaces/LeftSectionProps';
// import { getMembersFromPage } from '../searchEngine/getMembersFromPage';
import { mocGetMembers as getMembersFromPage } from '../searchEngine/mockGetMembers';
import { IMember } from '../types/IMember';
import _ from 'lodash';

const membersAudit = MembersAudit.getInstance();
const searchMemberInputRef = React.createRef<HTMLInputElement>();
const addMemberInputRef = React.createRef<HTMLInputElement>();
let superMembers = [];

export const LeftSection = (props: LeftSectionProps) => {
    const { members, setMembers, assertedMembers, setAssertedMembers, addMember } = props;
    const [nameSubString, setNameSubString] = useState<string>('');
    const [newMember, setNewMember] = useState<Omit<IMember, 'lastClass'>>({ fullName: '', firstTime: false });
    const loadMemberList = () => {
        if (superMembers.length === 0) {
            superMembers = getMembersFromPage();
        }
        const members = getMembersFromPage();
        superMembers.forEach((member, i) => member.fullName = members[i].fullName)
        setMembers(superMembers);
    }

    const removeMember = (selectedMember: IMember) => {
        setMembers(members.filter(member => member.fullName !== selectedMember.fullName));
        resetNameSubString();
    }

    const focusSearchMemberInput = () => {
        searchMemberInputRef.current && searchMemberInputRef.current.focus();
    }
    const focusAddMemberInput = () => {
        addMemberInputRef.current && addMemberInputRef.current.focus();
    }

    const toggleAssertedMember = (member: IMember): void => {
        const assertedMember = assertedMembers.find(assertedMember => assertedMember.fullName === member.fullName)
        if (assertedMember) {
            setAssertedMembers(assertedMembers.filter(member => member.fullName !== assertedMember.fullName));
        } else {
            setAssertedMembers(assertedMembers.concat(member));
        }
        resetNameSubString();
        focusSearchMemberInput();
    }

    const changeNameSubString = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameSubString(e.target.value || '');
    }

    const resetNameSubString = () => {
        setNameSubString('');
    }

    const changeNewMemberName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMember({ ...newMember, fullName: e.target.value || '' });
    }

    const changeNewMemberFirstTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMember({ ...newMember, firstTime: e.target.checked });
    }

    const resetNewMember = () => {
        setNewMember({ firstTime: false, fullName: '' });
    }

    const addNewMember = () => {
        if (newMember.fullName === '') return;
        let member = membersAudit.members.find(member => member.fullName === newMember.fullName);
        if (!member) {
            member = new MemberModel(newMember);
        }
        addMember(member);
        resetNewMember();
        focusAddMemberInput();
    }

    return <div className="left-side">
        <div>
            <button onClick={loadMemberList}>Load list</button>
            <input type="text" value={nameSubString} onChange={changeNameSubString} ref={searchMemberInputRef} />
        </div>
        <div className="member-list">
            {members.map(member => {
                const regExp = new RegExp(nameSubString ? '^' + nameSubString : '', 'i');
                const regExpLastName = new RegExp(nameSubString ? ' ' + nameSubString : '', 'i');
                if (regExp.test(member.fullName) || regExpLastName.test(member.fullName)) {
                    return <Member
                        key={member.fullName}
                        member={member}
                        removeMember={removeMember}
                        asserted={assertedMembers.some(assertedMember => assertedMember.fullName === member.fullName)}
                        toggleAssertedMember={toggleAssertedMember}
                    />
                }
            })}
        </div>
        <div className="add-member">
            <hr />
            <label><input type="checkbox" onChange={changeNewMemberFirstTime} checked={newMember.firstTime} /> first time</label>
            <input type="text" onChange={changeNewMemberName} value={newMember.fullName} ref={addMemberInputRef} />
            <button onClick={addNewMember}>Add</button>
        </div>
    </div>
}