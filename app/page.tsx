import clsx from "clsx";

export default function Home() {
  return (
    <div
      className={clsx(
        "h-[100vh] w-full flex justify-center items-center",
        "text-center"
      )}
    >
      <h1 className={clsx("text-2xl text-white")}>Liveblocks Figma</h1>
    </div>
  );
}
