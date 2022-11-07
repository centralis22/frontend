import React, { useState } from "react";

/*
  Use React context for widely used states.
  Do not create classes with only minor state differences.
  Do not create contexts for everything.

  https://stackoverflow.com/questions/41030361/
  how-to-update-react-context-from-inside-a-child-component
 */
const UserContext = React.createContext({
  sessionID: 0,
  setSessionID: () => 0,
  isInstructor: false,
  setInstructor: () => {},
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export function UserContextProvider({children}) {
  const [sessionID, setSessionID] = useState(0);
  const [isInstructor, setInstructor] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const userValues = {
    sessionID, setSessionID,
    isInstructor, setInstructor,
    isLoggedIn, setLoggedIn
  };

  return (
    <UserContext.Provider value={userValues}>
      {children}
    </UserContext.Provider>
  );
}

/**
 * UserContext contains information to identify
 * user's session and user's privileges.
 */
export function useUserContext() {
  return React.useContext(UserContext);
}
