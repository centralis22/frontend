import React from "react";
import { useRouter } from "next/router";
import sock from "../config/socket";

function Survey({ surveyNumber, user }) {
  var router = useRouter();
  var isStudent = user === "Student";

  /**
   * Survey answers.
   */
  const [answer, setAnswer] = React.useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  function saveText(event) {
    const { value, name } = event.target;

    setAnswer((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleSubmitSurvey(event) {
    event.preventDefault();

    const tempArray = [
      answer.question1,
      answer.question2,
      answer.question3,
      answer.question4,
      answer.question5,
    ];

    var sendobj = {
      request_id: 4877,
      request: "submit_poll",
      content: {
        poll_no: surveyNumber,
        poll_response: tempArray,
      },
    };

    sock.send(JSON.stringify(sendobj));

    setAnswer({
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
    });
  }

  return (
    <div className="pageSurvey">
      <div className="surveyBox">
        <p className="surveyTitle">Survey {surveyNumber}</p>
        <div className="surveyWarning">
          <span>
            Warning: *You can only submit your responses once. Please make sure
            you are ready to submit your answers before clicking the submit
            button.
          </span>
        </div>
        <div>
          <span className="surveyQuestion">
            This round, did your team decide to change anything regarding its
            product strategy?
          </span>
          <div className="surveyChoices">
            <input
              type="radio"
              onChange={saveText}
              value="No change was made and the team decided to stay on course with its
          plan"
              name="question1"
            />{" "}
            No change was made and the team decided to stay on course with its
            plan
            <br />
            <input
              type="radio"
              onChange={saveText}
              value="Some changes were made by modifying one or two points and then keeping
          the remaining elements the same"
              name="question1"
            />{" "}
            Some changes were made by modifying one or two points and then
            keeping the remaining elements the same
            <br />
            <input
              type="radio"
              onChange={saveText}
              value="Major changes were made in taking the original plan into a new
          direction"
              name="question1"
            />{" "}
            Major changes were made in taking the original plan into a new
            direction
            <br />
            <br />
          </div>
        </div>
        <div>
          <span className="surveyQuestion">
            If you made a change in product strategy, please briefly describe
            it:
          </span>
          <div>
            <textarea
              className="questionTextField"
              onChange={saveText}
              name="question2"
              width="500px"
              value={answer.question2}
              rows="3"
            />
          </div>
          <br />
        </div>
        <div>
          <span className="surveyQuestion">
            This round, did your team decide to pursue the potential new
            investor?
          </span>
          <div className="surveyChoices">
            <input
              type="radio"
              onChange={saveText}
              value="No"
              name="question3"
            />{" "}
            No
            <br />
            <input
              type="radio"
              onChange={saveText}
              value="Hesitantly"
              name="question3"
            />{" "}
            Hesitantly
            <br />
            <input
              type="radio"
              onChange={saveText}
              value="Yes"
              name="question3"
            />{" "}
            Yes
            <br />
            <br />
          </div>
        </div>
        <div>
          <span className="surveyQuestion">
            This round, did your team decide to change anything regarding its
            product strategy?
          </span>
          <br />
          <div className="surveyChoices">
            <input
              type="radio"
              onChange={saveText}
              value="No"
              name="question4"
            />{" "}
            No
            <br />
            <input
              type="radio"
              onChange={saveText}
              value="Yes - add someone"
              name="question4"
            />{" "}
            Yes - add someone
            <br />
            <input
              type="radio"
              onChange={saveText}
              value="Yes - remove someone or reduce their role"
              name="question4"
            />{" "}
            Yes - remove someone or reduce their role
            <br />
            <br />
          </div>
        </div>
        <div>
          <span className="surveyQuestion">
            If you made a change in the people on the team, please briefly
            describe it:
          </span>
          <br />
          <div>
            <textarea
              className="questionTextField"
              onChange={saveText}
              name="question5"
              width="500px"
              value={answer.question5}
              rows="3"
            />
          </div>
        </div>
      </div>
      {isStudent ? (
        <div className="surveySubmitWrapper">
          <button onClick={handleSubmitSurvey} className="surveySubmitButton">
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Survey;
