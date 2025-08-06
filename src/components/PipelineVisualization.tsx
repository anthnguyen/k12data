import React, { useState } from 'react';

interface PipelinePhase {
  id: string;
  title: string;
  subtitle: string;
  steps: string[];
  color: string;
  bgColor: string;
}

const pipelinePhases: PipelinePhase[] = [
  {
    id: 'evaluation',
    title: 'EVALUATION',
    subtitle: 'Assessment & Analysis',
    steps: [
      'Data Quality Assessment',
      'Performance Metrics Review',
      'Compliance Validation',
      'Risk Assessment'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-200'
  },
  {
    id: 'creation',
    title: 'DATA CREATION',
    subtitle: 'Generation & Processing',
    steps: [
      'Data Collection',
      'Synthetic Data Generation',
      'Data Transformation',
      'Feature Engineering'
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 border-orange-200'
  },
  {
    id: 'quality',
    title: 'QUALITY CHECK',
    subtitle: 'Validation & Testing',
    steps: [
      'Data Integrity Verification',
      'Schema Validation',
      'Statistical Analysis',
      'Error Detection & Correction'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 border-purple-200'
  },
  {
    id: 'delivery',
    title: 'DELIVERY',
    subtitle: 'Deployment & Distribution',
    steps: [
      'Final Packaging',
      'Security Implementation',
      'Distribution Setup',
      'Monitoring & Support'
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200'
  }
];

const PipelineVisualization = () => {
  const [activePhase, setActivePhase] = useState('evaluation');

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Data Pipeline Workflow
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            End-to-end data processing pipeline with comprehensive evaluation, creation, quality assurance, and delivery phases
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Side Menu */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="space-y-4">
                {pipelinePhases.map((phase, index) => (
                  <div key={phase.id} className="relative">
                    {/* Menu Item */}
                    <button
                      onClick={() => setActivePhase(phase.id)}
                      className={`
                        w-full text-left p-4 rounded-lg border transition-all duration-300 group
                        ${activePhase === phase.id 
                          ? 'bg-white text-black border-white shadow-lg' 
                          : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-gray-300'
                        }
                      `}
                    >
                      {/* Connection dot */}
                      <div className={`
                        absolute left-3 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 hidden lg:block
                        ${activePhase === phase.id 
                          ? 'bg-white border-white' 
                          : 'bg-gray-800 border-gray-600 group-hover:border-gray-500'
                        }
                      `}></div>
                      
                      <div className="lg:ml-6">
                        <div className="font-semibold text-sm tracking-wider">
                          {phase.title}
                        </div>
                        <div className="text-xs opacity-70 mt-1">
                          {phase.subtitle}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Pipeline Content */}
          <div className="flex-1">
            <div className="relative">
              
              <div className="space-y-8">
                {pipelinePhases.map((phase, index) => (
                  <div 
                    key={phase.id}
                    className={`
                      relative transform transition-all duration-500
                      ${activePhase === phase.id 
                        ? 'scale-105 opacity-100' 
                        : 'scale-100 opacity-60 hover:opacity-80'
                      }
                    `}
                  >
                    {/* Phase Box */}
                    <div className={`
                      relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border p-6
                      ${activePhase === phase.id 
                        ? 'border-white shadow-2xl shadow-white/10' 
                        : 'border-slate-700/50 hover:border-slate-600/70'
                      }
                      transition-all duration-300
                    `}>

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className={`
                            text-xl font-semibold mb-2 tracking-wide
                            ${activePhase === phase.id ? 'text-white' : 'text-gray-300'}
                          `}>
                            {phase.title}
                          </h3>
                          <p className={`
                            text-sm
                            ${activePhase === phase.id ? 'text-gray-300' : 'text-gray-500'}
                          `}>
                            {phase.subtitle}
                          </p>
                        </div>
                        
                        {/* Phase number */}
                        <div className={`
                          w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold
                          ${activePhase === phase.id 
                            ? 'border-white text-white' 
                            : 'border-gray-600 text-gray-600'
                          }
                        `}>
                          {index + 1}
                        </div>
                      </div>

                      {/* Steps */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.steps.map((step, stepIndex) => (
                          <div 
                            key={stepIndex}
                            className={`
                              flex items-center space-x-3 p-3 rounded-lg transition-all duration-300
                              ${activePhase === phase.id 
                                ? 'bg-slate-700/50 border border-slate-600/30' 
                                : 'bg-slate-800/30'
                              }
                            `}
                          >
                            <div className={`
                              w-2 h-2 rounded-full
                              ${activePhase === phase.id ? 'bg-white' : 'bg-gray-600'}
                            `}></div>
                            <span className={`
                              text-sm
                              ${activePhase === phase.id ? 'text-gray-200' : 'text-gray-500'}
                            `}>
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow to next phase */}
                    {index < pipelinePhases.length - 1 && (
                      <div className="flex justify-center mt-4">
                        <div className={`
                          w-6 h-6 transform rotate-90
                          ${activePhase === phase.id ? 'text-white' : 'text-gray-600'}
                          transition-all duration-300
                        `}>
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineVisualization;