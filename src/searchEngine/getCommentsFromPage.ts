import { IComment } from '../types/IComment';

const commentSelector = '.bp_post';
const nameSelector = '.bp_author';
const contentSelector = '.bp_text';

function takeCommentsFromPage() {
    return document.querySelectorAll(commentSelector);
}

function parseComments(comments: any): IComment[] {
    const result: IComment[] = [];
    comments.forEach((comment: any) => {
        const fullName = comment.querySelector(nameSelector).textContent;
        const text = comment.querySelector(contentSelector).textContent;
        result.push({ fullName, text });
    })
    return result;
}

export function getCommentsFromPage(): IComment[] {
    const comments = takeCommentsFromPage();
    const result = parseComments(comments);
    return result;
}