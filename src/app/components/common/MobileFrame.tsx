import React, { ReactNode } from 'react';
import { X } from 'lucide-react';

interface MobileFrameProps {
  children: ReactNode;
  onExit?: () => void;
  showStatusBar?: boolean;
}

export function MobileFrame({ children, onExit, showStatusBar = true }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      {onExit && (
        <button
          onClick={onExit}
          className="fixed top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
      
      <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Mobile device frame */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ width: '390px', height: '844px' }}>
          {/* Status bar */}
          {showStatusBar && (
            <div className="absolute top-0 left-0 right-0 h-11 bg-white z-40 flex items-center justify-between px-6 pt-2">
              <span className="text-sm">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border border-foreground rounded-sm relative">
                  <div className="absolute inset-0.5 bg-foreground rounded-[1px]"></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Screen content */}
          <div className="h-full overflow-hidden">
            {children}
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
  );
}
