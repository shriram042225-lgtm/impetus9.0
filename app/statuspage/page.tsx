import CheckStatusCard from "@/components/CheckStatusCard";

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
            Check Status
          </h1>
          <p className="text-zinc-400 text-sm">
            Lost your receipt? Enter your details below to retrieve your digital pass.
          </p>
        </div>

        {/* You can either hardcode the event if this page is specific */}
        {/* OR make a small selector here to choose the event first */}
        <CheckStatusCard />
        
        {/* Example of how you might instruct users if it's generic: */}
        {/* <p className="text-xs text-center text-zinc-600">Currently checking for: RoboWar</p> */}
      </div>
    </div>
  );
}