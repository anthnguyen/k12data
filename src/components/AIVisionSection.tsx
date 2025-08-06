import React, { useState } from 'react';

const AIVisionSection = () => {
  const [activeNode, setActiveNode] = useState('center');
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight">
            Powering the Future of AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Through world-class RLHF, data generation, model evaluation, safety, and alignment
          </p>
        </div>

        <div className="relative h-[600px] w-full max-w-4xl mx-auto">
          {/* Connecting Lines - Under everything */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 600">
            <g className="opacity-70">
              {/* Center (400, 300) to RLHF (180, 120) */}
              <line x1="400" y1="300" x2="180" y2="120" stroke="url(#monoGradient1)" strokeWidth="2.5" className="animate-pulse" />
              {/* Center (400, 300) to Data Gen (620, 120) */}
              <line x1="400" y1="300" x2="620" y2="120" stroke="url(#monoGradient2)" strokeWidth="2.5" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
              {/* Center (400, 300) to Eval (620, 480) */}
              <line x1="400" y1="300" x2="620" y2="480" stroke="url(#monoGradient3)" strokeWidth="2.5" className="animate-pulse" style={{ animationDelay: '1.6s' }} />
              {/* Center (400, 300) to Safety (180, 480) */}
              <line x1="400" y1="300" x2="180" y2="480" stroke="url(#monoGradient4)" strokeWidth="2.5" className="animate-pulse" style={{ animationDelay: '2.4s' }} />
            </g>
            
            <defs>
              <linearGradient id="monoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(215 30% 75%)" stopOpacity="0.9" />
                <stop offset="50%" stopColor="hsl(215 25% 70%)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(215 20% 65%)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="monoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(220 30% 75%)" stopOpacity="0.9" />
                <stop offset="50%" stopColor="hsl(220 25% 70%)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(220 20% 65%)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="monoGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(225 30% 75%)" stopOpacity="0.9" />
                <stop offset="50%" stopColor="hsl(225 25% 70%)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(225 20% 65%)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="monoGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(210 30% 75%)" stopOpacity="0.9" />
                <stop offset="50%" stopColor="hsl(210 25% 70%)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(210 20% 65%)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Hub */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-slate-700/80 to-slate-800/90 border-2 border-slate-600/40 animate-pulse z-20 shadow-lg shadow-slate-900/50 cursor-pointer"
            onClick={() => setActiveNode('center')}
          >
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-600/30 to-slate-700/40 backdrop-blur-sm flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-400 to-slate-500"></div>
            </div>
          </div>
          
          {/* K12Data Label */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20 text-slate-300 font-bold text-lg tracking-wide z-20">
            k12data
          </div>

          {/* RLHF Node - Top Left */}
          <div 
            className="absolute top-8 left-16 w-52 h-40 rounded-xl flex flex-col items-center justify-center shadow-lg cursor-pointer transition-all duration-300 z-10"
            onClick={() => setActiveNode('rlhf')}
            style={{
              background: `radial-gradient(ellipse 400px 300px at 30% 40%, hsl(0 0% 12%) 0%, hsl(0 0% 4%) 40%, transparent 80%),
                          radial-gradient(ellipse 300px 200px at 70% 60%, hsl(0 0% 10%) 0%, hsl(0 0% 6%) 35%, transparent 70%),
                          linear-gradient(135deg, hsl(0 0% 2%) 0%, hsl(0 0% 4%) 25%, hsl(0 0% 6%) 50%, hsl(0 0% 4%) 75%, hsl(0 0% 8%) 100%)`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 3px rgba(0,0,0,0.3)',
              border: '1px solid rgba(150,150,150,0.15)',
            }}
          >
            <div className="text-lg font-bold text-white mb-2">RLHF</div>
            <div className="text-sm text-white/70 text-center leading-tight">Human<br/>Feedback</div>
          </div>

          {/* Data Generation Node - Top Right */}
          <div 
            className="absolute top-8 right-16 w-52 h-40 rounded-xl flex flex-col items-center justify-center shadow-lg cursor-pointer transition-all duration-300 z-10"
            onClick={() => setActiveNode('datagen')}
            style={{
              background: `radial-gradient(ellipse 400px 300px at 30% 40%, hsl(0 0% 12%) 0%, hsl(0 0% 4%) 40%, transparent 80%),
                          radial-gradient(ellipse 300px 200px at 70% 60%, hsl(0 0% 10%) 0%, hsl(0 0% 6%) 35%, transparent 70%),
                          linear-gradient(135deg, hsl(0 0% 2%) 0%, hsl(0 0% 4%) 25%, hsl(0 0% 6%) 50%, hsl(0 0% 4%) 75%, hsl(0 0% 8%) 100%)`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 3px rgba(0,0,0,0.3)',
              border: '1px solid rgba(150,150,150,0.15)',
            }}
          >
            <div className="text-lg font-bold text-white mb-2">Data Gen</div>
            <div className="text-sm text-white/70 text-center leading-tight">Quality<br/>Datasets</div>
          </div>

          {/* Model Evaluation Node - Bottom Right */}
          <div 
            className="absolute bottom-8 right-16 w-52 h-40 rounded-xl flex flex-col items-center justify-center shadow-lg cursor-pointer transition-all duration-300 z-10"
            onClick={() => setActiveNode('eval')}
            style={{
              background: `radial-gradient(ellipse 400px 300px at 30% 40%, hsl(0 0% 12%) 0%, hsl(0 0% 4%) 40%, transparent 80%),
                          radial-gradient(ellipse 300px 200px at 70% 60%, hsl(0 0% 10%) 0%, hsl(0 0% 6%) 35%, transparent 70%),
                          linear-gradient(135deg, hsl(0 0% 2%) 0%, hsl(0 0% 4%) 25%, hsl(0 0% 6%) 50%, hsl(0 0% 4%) 75%, hsl(0 0% 8%) 100%)`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 3px rgba(0,0,0,0.3)',
              border: '1px solid rgba(150,150,150,0.15)',
            }}
          >
            <div className="text-lg font-bold text-white mb-2">Eval</div>
            <div className="text-sm text-white/70 text-center leading-tight">Model<br/>Testing</div>
          </div>

          {/* Safety Node - Bottom Left */}
          <div 
            className="absolute bottom-8 left-16 w-52 h-40 rounded-xl flex flex-col items-center justify-center shadow-lg cursor-pointer transition-all duration-300 z-10"
            onClick={() => setActiveNode('safety')}
            style={{
              background: `radial-gradient(ellipse 400px 300px at 30% 40%, hsl(0 0% 12%) 0%, hsl(0 0% 4%) 40%, transparent 80%),
                          radial-gradient(ellipse 300px 200px at 70% 60%, hsl(0 0% 10%) 0%, hsl(0 0% 6%) 35%, transparent 70%),
                          linear-gradient(135deg, hsl(0 0% 2%) 0%, hsl(0 0% 4%) 25%, hsl(0 0% 6%) 50%, hsl(0 0% 4%) 75%, hsl(0 0% 8%) 100%)`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 3px rgba(0,0,0,0.3)',
              border: '1px solid rgba(150,150,150,0.15)',
            }}
          >
            <div className="text-lg font-bold text-white mb-2">Safety</div>
            <div className="text-sm text-white/70 text-center leading-tight">Risk<br/>Mitigation</div>
          </div>

          {/* Floating Data Particles */}
          <div className="absolute top-24 left-32 w-2 h-2 bg-slate-500/60 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3.5s' }}></div>
          <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-slate-400/50 rounded-full animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '2.8s' }}></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-slate-500/40 rounded-full animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '3.2s' }}></div>
          <div className="absolute bottom-40 right-40 w-1 h-1 bg-slate-400/60 rounded-full animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '2.5s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-slate-500/50 rounded-full animate-bounce" style={{ animationDelay: '2.1s', animationDuration: '3.8s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default AIVisionSection;