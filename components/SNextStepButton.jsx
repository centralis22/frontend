import { useRouter } from "next/router";
import sock from "../config/socket";

function SNextStepButton({ sessionID, pageLink, sessionProgress }) {
  const router = useRouter();

  function handleNextPage() {
    var sendobj = {
      request_id: 4872,
      request: "advance_stage",
      content: -1,
    };

    sock.send(JSON.stringify(sendobj));

    router.push({
      pathname: pageLink,
      query: { sessionID: sessionID, sessionProgress: sessionProgress + 1 },
    });
  }

  return (
    <button className="GameNextButton" onClick={handleNextPage}>
      Next step
    </button>
  );
}

export default SNextStepButton;
