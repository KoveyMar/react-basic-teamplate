import BasicMapper from './basicMapper';

/**
 * @description localStorage
 * @date 2021-12-13
 * @param {any}
 * @returns {any}
 */
class LocalStore extends BasicMapper {
    private nameSpace: string = 'localStorage';

    public store: Storage = window.localStorage;
}

export default new LocalStore();
