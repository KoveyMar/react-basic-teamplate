interface DataBaseProperties {
    DBName: string;
    Version?: number;
}

interface ServiceMapper {
    SQLStore: IDBFactory | void;
    readonly NameSpace: string;
}

class WebService<P = ServiceMapper> {
    constructor() {}

    protected NameSpace: string = 'WebSQLStore';

    private SQLStore: IDBFactory = (window as Window).indexedDB;

    protected initIDB({
        DBName,
        Version = 1,
    }: DataBaseProperties): boolean | void {
        if (!window.indexedDB) return !1;
        this.SQLStore.open(DBName, Version);
    }

    protected transication() {}
}
