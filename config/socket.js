import * as SockJS from "sockjs-client";

const sock = new SockJS("http://centralisbackend.elcexercise.org:8898/api");

/**
 * Maps broadcast type names to handling functions.
 * Provides a systematic way to add and resolve socket broadcasts.
 * @type {Map<string, function>}
 */
export let socketBroadcastMethods = new Map();

/**
 * Maps respond type names to handling functions.
 * Provides a systematic way to add and resolve socket responds.
 * @type {Map<string, function>}
 */
export let socketRespondMethods = new Map();

/**
 * Maps requestIDs to request types.
 * @type {Map<int, string>}
 */
let socketRequestIDTypes = new Map();

// DO NOT EVER MODIFY THIS VALUE DIRECTLY!
let socketRequestID = 0;

export function generateSocketRequestID(requestType) {
  socketRequestIDTypes.set(socketRequestID, requestType);
  return socketRequestID++;
}

export function getRequestType(socketRequestID) {
  let requestType = socketRequestIDTypes.get(socketRequestID);
  socketRequestIDTypes.delete(socketRequestID);
  return requestType;
}

export default sock;
