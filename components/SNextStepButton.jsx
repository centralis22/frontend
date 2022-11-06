import { useRouter } from "next/router";
import sock from "../config/socket";

/**
 * Sends advance_stage signal to the server.
 * Forwarding to the new page will be done on receiving
 * a broadcast, to decouple the button with the router.
 */
function SNextStepButton(props) {
  const router = useRouter();

  function handleNextPage() {
    var sendobj = {
      request_id: 4872,
      request: "advance_stage",
      content: -1,
    };

    sock.send(JSON.stringify(sendobj));

    // Ini
    /*
    router.push({
      pathname: props.PageLink,
      query: { sessionID: props.sessionID, currentIndex: props.currentIndex },
    });
     */
  }

  return (
    <button className="GameNextButton" onClick={handleNextPage}>
      Next step
    </button>
  );
}

export default SNextStepButton;
