import * as SockJS from "sockjs-client";

const sock = new SockJS("http://localhost:8080/api");

export default sock;