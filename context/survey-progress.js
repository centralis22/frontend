import React, { useState } from "react";

const SurveyProgressContext = React.createContext({
  survey1Progress: [],
  setSurvey1Progress: () => [],
});

export function SurveyProgressContextProvider({ children }) {
  const [survey1Progress, setSurvey1Progress] = useState([]);


  const surveyProgressValues = {
    survey1Progress, setSurvey1Progress,
  };

  return (
    <SurveyProgressContext.Provider value={surveyProgressValues}>
      {children}
    </SurveyProgressContext.Provider>
  );
}

/**
 * SurveyProgressContext contains information on which teams
 * have completed their survey.
 */
export function useSurveyProgressContext() {
  return React.useContext(SurveyProgressContext);
}
