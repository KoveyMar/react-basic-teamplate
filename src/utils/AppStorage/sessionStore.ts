import BasicMapper from './basicMapper';

/**
 * @description sessionStorage
 * @date 2021-12-13
 * @param {any}
 * @returns {any}
 */
class SessionStore extends BasicMapper {
    private nameSpace: string = 'sessionStorage';

    public store: Storage = window.sessionStorage;
}

export default new SessionStore();
