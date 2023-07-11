import useRouter from "../../hooks/useRouter";

export default function About() {
  const { push } = useRouter();
  return (
    <div>
      <h1>About</h1>
      <p>This is Joy's About page.</p>
      <button onClick={() => push("/")}>Go Home</button>
    </div>
  );
}
