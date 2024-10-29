const endpoint = require('./endpoints/endpoint');
const DataClass = require('./endpoints/dataclass');

class Server {
    constructor() {
        this.endpoint = new endpoint();
        this.dataClass = new DataClass();
    }

    main() {
        console.log("hello world");
        console.log(this.endpoint.getMessage());
        this.dataClass.test();
    }
}

const server = new Server();
server.main();