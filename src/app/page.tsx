import MoodSelect from "@/components/MoodSelect";

export default function Home() {
  return (
    <div
      className={
        "bg-pink-700 flex items-center justify-center w-screen h-screen flex-col"
      }
    >
      <MoodSelect />
    </div>
  );
}
