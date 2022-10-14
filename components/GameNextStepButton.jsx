import { useRouter } from "next/router";

function GameNextStepButton(props) {
  const router = useRouter();

  function handleNextPage() {
    router.push(props.PageLink);
  }

  return (
    <button className="IntroductionNextButton" onClick={handleNextPage}>
      Next step
    </button>
  );
}

export default GameNextStepButton;
