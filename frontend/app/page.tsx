import { MatrixRain } from "@/components/MatrixRain";
import { TerminalChat } from "@/components/TerminalChat";

/**
 * Home: full-viewport Matrix aesthetic with rain backdrop and terminal chat.
 */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-matrix-void">
      <MatrixRain />
      <div className="crt-overlay fixed inset-0 z-[1]" aria-hidden />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-6 sm:px-6 sm:py-10">
        <TerminalChat />
      </div>
    </main>
  );
}
