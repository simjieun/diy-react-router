import useRouter from "../../hooks/useRouter";

export default function Home() {
  const { push } = useRouter();
  return (
    <div>
      <h1>Home</h1>
      <p>This is Joy's Home page.</p>
      <button onClick={() => push("/about")}>Go About</button>
    </div>
  );
}
