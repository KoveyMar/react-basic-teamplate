import BasicMapper from './storeMapper.I';

class SessionStorage extends BasicMapper {
    public nameSpace: string = 'sessionStorage';

    public store: Storage = window.sessionStorage;
}

export default new SessionStorage();
