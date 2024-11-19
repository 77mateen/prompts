import Prompt from "@/models/prompt";

async function Prompts() {
  const prompts = await Prompt.find();
  return (
    <div>
      <p>Prompts: </p>
      {prompts.map((prompt) => {
        <>
          <p>{prompt.tag}</p>
          <p>{prompt.prompt}</p>
        </>;
      })}
    </div>
  );
}

export default Prompts;
