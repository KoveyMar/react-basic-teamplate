import BasicMapper from './store.I';

class LocalStore extends BasicMapper {
    public nameSpace: string = 'localStorage';

    public store: Storage = window.localStorage;
}

export default new LocalStore();
