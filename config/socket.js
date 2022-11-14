import * as SockJS from "sockjs-client";

const sock = new SockJS("http://localhost:8080/api");

/**
 * Maps broadcast type names to handling functions.
 * Provides a systematic way to add and resolve socket broadcasts.
 * @type {Map<string, function>}
 */
export const SOCKET_BROADCAST_METHODS = new Map();

export default sock;
