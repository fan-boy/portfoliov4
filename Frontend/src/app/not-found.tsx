// app/not-found.tsx

"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6 py-16">
      <div className="max-w-xl w-full flex flex-col items-center">
        <pre
          aria-hidden="true"
          className="mb-4 text-base leading-tight text-gray-400"
          style={{ fontFamily: "monospace" }}
        >{`
                                                                                 
                               .. :.                                 
                          .xX$$$$$x$$Xx.                             
                        +X$&&&&&&&&&&&&$;                            
                      +X$$&&&&&&&&&&&&&&&X.                          
                     +$$$&&&&&&&&&&&&&&&&&&&:                        
                   :X&&$&&&&&&&&&&&&&&&&&&&&&X.                      
                  .X$&&&&$XxxxxxxxxxxxXX$&&&&&+                      
                  .$&&&$Xx+;:;+++++++++xxX$&&&+                      
                  +&$&$xx++;;;;++++++;;+xxX$&&$.                     
                  +&&$xxx++;::;;;+;+;;;++xxX$&&.                     
                  ;&&Xx++xxxxx++;;;;++xXXXxx$&&:                     
                  .&&x+X&&&&&&&Xx++X$&&$$&&Xx&&;                     
                  .&$+x$X$$$$$$$Xxx$$$$X$$XXx$&:                     
                   $$xxX$$$&&$$XX++xX$$&$$$Xx$&X                     
                  ;$$++xxXXXXXXx+:;+xxXXXXXxxXxx;                    
                  Xx$++;::;+++x+;.;+x+;++;;+xXXx:                    
                  ;x$x++;;;;;++xxx+xxx+;;;;+x$Xx:                    
                  .xXX+xxxx+x++XX$XxX++++++xx$x+                     
                   ;X&XxXXXXXX$&&&&&&$$$XxxX$$;.                     
                     X&$$XX$&&$$XXXXX$&&$XX$&;                       
                     ;&&&$$&$$XXxxxxXXX$$X$&&.                       
                      +&&&&&&$$&&&&&$$$&&&&&:                        
                      .x&&&&&&$$&&$$$&&&&&&$$Xx;                     
                     .+X&&&&&&&&&&&&&&&&&&$X&&&$x                    
                     :xx&X$&&&&&&&&&&&&&$XXX$&$xx                    
                     ;xxxX$$&&&&&&&&&&$$XXXX$XxxX:                   
                  .:+xxXXxXX$$$$$&$$$XXxxX$$XX$$Xxxx:                
               :+++++xXX$$XXX$$$$$$XXXxXX$XX$$XXXXXXXXx+:            
            :++xxx+xx+xxXXXX$$$$$XXXxxXXXX$XXxxxxxXxXxXXXXXx:        
        .;+++xxxx++xx++++xxXXXXX$$$$$$&&$XXXXxxXXxxxxXxXXXXXXXx+.    
     :++xxx+xXxxx+xxxxxxxx++x$&$$$X$$&&&XXXxXXXXXXXxXXXxXXXXXXXXXx+  
  :+++xxxx+xXxxxx+xxxxxxxX$$$XXXXX$XX$XX$XXXXXXXXXXXXXXXXXXXX$$XXXXx:
 +++xxxXXxxXxxxxx+xxxxxxXXXXxxxxXxxxxXXXXXXXXXXXXXXXXXXXXXXXXX$$XXXXX
xXXxxxXXXxXXxxxxx+xxxxx++x++++++x+++xxxXXXXXXXXXXxXXXXXXXXXXXX$$XXXXX
XXX$xx$XXxXXxxxxxxxxxxxx+++++++xXxxxxxxxXXXXXXXXXXXXXXXXXXXXXXX$$$$XX
XX$$XX$$xXXxxxxxxxxxx+xxxxx++xxxXXXXXXxXXXXXXXXXXXXXXXXXXXXXXXX$$$$X$
        `}
        </pre>
        <h1 className=" text-fontprimary mb-2">Page Not Found</h1>
        <p className="mb-6 text-fontsecondary text-center">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-4 py-2 rounded-full border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-700 hover:text-white transition"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
