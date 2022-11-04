/**
 * Recording SessionProgress in
 */
import React, { useState } from "react";

const SessionProgressContext = React.createContext({
  sessionProgress: 0,
});

export function SessionProgressContextProvider({children}) {
  const [sessionProgress, setSessionProgress] = useState(0);

  const sessionProgressValues = {
    sessionProgress, setSessionProgress
  };

  return (
    <SessionProgressContext.Provider value={sessionProgressValues}>
      {children}
    </SessionProgressContext.Provider>
  );
}

/**
 * SessionProgressContext contains session progress information,
 * tracking the webpage that is displayed to all users in the session.
 */
export function useSessionProgressContext() {
  return React.useContext(SessionProgressContext);
}
