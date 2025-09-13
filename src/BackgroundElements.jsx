   export default function BackgroundElements(){
    return(
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      </div>
    )
   }