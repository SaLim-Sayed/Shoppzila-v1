// Import necessary modules and components
import { Button, Image } from "@nextui-org/react";
import React from "react";

// Define the component
const CardComponent: React.FC = () => {
    return (
        <div className=" flex justify-center items-center">
          <div className="flex-1 rounded-xl relative">
            <div className="w-full group sm:h-[450px]    justify-center items-center rounded-xl relative overflow-hidden h-[430px]">
              <Image
                width={1920}
                height={1080}
                alt="second banner"
                className="absolute m-4 -z-50 w-[1400px] h-[670px] t opacity-5"
                 
                src="/overlay.PNG"
    
                style={{
                  
                  objectFit: "cover",
                  color: "transparent",
                  transition: "all 0.3s ease-in-out 0s",
                  transformOrigin: "center center",
                }}
              />
            </div>
    
            <div className="absolute w-full flex justify-center items-center flex-col gap-[20px] top-0 left-0 p-[30px] sm:p-[50px]">
              <span className="text-[1.1rem]">Up to 30% off</span>
              <h2 className="text-[1.3rem] font-[600]">Shoulder bags</h2>
              <Image alt="bag-img" src="./bag.png" />
              <div className="flex gap-[10px]">
                <Button className="z-0 group relative items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none border-default text-foreground border-[1px] shadow-small bg-lit-900 flex flex-col h-[50px] min-w-[50px] rounded-[50px] sm:min-w-[60px] sm:h-[60px] gap-0 p-0 sm:rounded-[60px]">
                  <div className="sm:text-[1.3rem] text-[20px] font-[500] sm:font-[600]">
                    12
                  </div>
                  <div>Days</div>
                </Button>
                <Button className="z-0 group relative items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none border-default text-foreground border-[1px] shadow-small bg-lit-900 flex flex-col h-[50px] min-w-[50px] rounded-[50px] sm:min-w-[60px] sm:h-[60px] gap-0 p-0 sm:rounded-[60px]">
                  <div className="sm:text-[1.3rem] text-[20px] font-[500] sm:font-[600]">
                    12
                  </div>
                  <div>Hours</div>
                </Button>
                <Button className="z-0 group relative items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none border-default text-foreground border-[1px] shadow-small bg-lit-900 flex flex-col h-[50px] min-w-[50px] rounded-[50px] sm:min-w-[60px] sm:h-[60px] gap-0 p-0 sm:rounded-[60px]">
                  <div className="sm:text-[1.3rem] text-[20px] font-[500] sm:font-[600]">
                    12
                  </div>
                  <div>Mins</div>
                </Button>
                <Button className="z-0 group relative items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none border-default text-foreground border-[1px] shadow-small bg-lit-900 flex flex-col h-[50px] min-w-[50px] rounded-[50px] sm:min-w-[60px] sm:h-[60px] gap-0 p-0 sm:rounded-[60px]">
                  <div className="sm:text-[1.3rem] text-[20px] font-[500] sm:font-[600]">
                    12
                  </div>
                  <div>Secs</div>
                </Button>
                {/* Repeat the Button structure for Hours, Mins, and Secs */}
              </div>
              <Button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium min-w-unit-20 h-unit-10 gap-unit-2 rounded-full [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none bg-transparent border-default text-drk-900 w-max text-[16px] font-[600] px-[20px]">
                Shop now
              </Button>
            </div>
          </div>
        </div>
      );
    };

export default CardComponent;
