import { IMember } from "../types/IMember";
import { MembersAudit } from '../models/membersAudit';
import { Member } from '../models/member';

const membersAudit = MembersAudit.getInstance();

const members: IMember[] = JSON.parse(`[{"fullName":"Полина Мельниченко","firstTime":false},{"fullName":"Алексей Старостин","firstTime":false},{"fullName":"Алексей Емельяненко","firstTime":false},{"fullName":"Александр Оликов","firstTime":false},{"fullName":"Алексей Петерсон","firstTime":false},{"fullName":"Анна Александрова","firstTime":false},{"fullName":"Sergey Zhemoydyk","firstTime":false},{"fullName":"Майя Костенко","firstTime":false},{"fullName":"Даниил Яковенко","firstTime":false},{"fullName":"Александра Янушко","firstTime":false},{"fullName":"Данила Акашев","firstTime":false},{"fullName":"Оля Власова","firstTime":false},{"fullName":"Илья Дерезяк","firstTime":false},{"fullName":"Вера Жданова","firstTime":false},{"fullName":"Алексей Ковалёв","firstTime":true},{"fullName":"Yipeng Hu","firstTime":false},{"fullName":"Александр Куратник","firstTime":false},{"fullName":"Diana Winchester","firstTime":false},{"fullName":"Владимир Язенок","firstTime":false},{"fullName":"Алексей Алексеев","firstTime":false},{"fullName":"Анастасия Шило","firstTime":true},{"fullName":"Иван Трус","firstTime":false},{"fullName":"Варвара Кульгаева","firstTime":false},{"fullName":"Сергей Сверкальцев","firstTime":false},{"fullName":"Юленька Жавнерчик","firstTime":false},{"fullName":"Mr Nistyuk","firstTime":false},{"fullName":"Никита Черняков","firstTime":false},{"fullName":"Анастасия Лис","firstTime":false},{"fullName":"Олег Вождаев","firstTime":false},{"fullName":"Int Pop","firstTime":true},{"fullName":"Марьяна Прокопчик","firstTime":false},{"fullName":"Ольга Дроздова","firstTime":true},{"fullName":"Igor Zhukovsky","firstTime":false},{"fullName":"Катя Коляда","firstTime":false},{"fullName":"Артем Илясов","firstTime":false},{"fullName":"Анастасия Щербо","firstTime":false},{"fullName":"Антон Брусков","firstTime":false},{"fullName":"Елизавета Жук","firstTime":false},{"fullName":"Юлия Масленченко","firstTime":false},{"fullName":"Юрий Соломахо","firstTime":false},{"fullName":"Ульяна Дуве","firstTime":true},{"fullName":"Янина Миронович","firstTime":false},{"fullName":"Ирина Кисель","firstTime":true}]`);
export const mocGetMembers = () => {
    return members.map(attender => {
        const member = membersAudit.members.find(member => member.fullName === attender.fullName);
        if (member) {
            return member;
        }
        return new Member(attender);
    });
};