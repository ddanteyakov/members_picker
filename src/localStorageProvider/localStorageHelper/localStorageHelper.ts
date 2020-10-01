export const localStorageHelper = {

    save(key: string, data: any) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch {

        }
    },

    get(key: string) {
        try {
            return JSON.parse(localStorage.getItem(key) || '');
        } catch {

        }
    },

    remove(key: string) {
        try {
            localStorage.removeItem(key);
        } catch {

        }
    }
}

export default localStorageHelper;