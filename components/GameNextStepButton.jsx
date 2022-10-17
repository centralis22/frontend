import { useRouter } from "next/router";
import sock from "../config/socket";

function GameNextStepButton(props) {
  const router = useRouter();

  function handleNextPage() {
    var sendobj = {
      request_id: 4872,
      request: "advance_stage",
      content: -1,
    };

    sock.send(JSON.stringify(sendobj));

    router.push({
      pathname: props.PageLink,
      query: { sessionID: props.sessionID, currentIndex: props.currentIndex },
    });
  }

  return (
    <button className="GameNextButton" onClick={handleNextPage}>
      Next step
    </button>
  );
}

export default GameNextStepButton;
