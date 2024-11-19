import { createPrompt } from "@/actions/actions";

export default function Create() {
  return (
    <section>
      <h1>Create Prompt</h1>
      <form action={createPrompt}>
        <input
          type="text"
          name="prompt"
          placeholder="Title for new prompt"
          required
        />
        <input type="text" name="tag" placeholder="(#new #prompts)" required />
        <button type="submit">Create</button>
      </form>
    </section>
  );
}
