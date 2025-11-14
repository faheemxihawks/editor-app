import React from 'react';

interface TemplateData {
  title: string;
  tags: string;
  content: string;
}

interface TemplatesProps {
  onSelectTemplate: (template: TemplateData) => void;
}

const templates: { id: string; name: string; description: string; data: TemplateData }[] = [
 

 
  {
    id: 'CrewAI provides a framework and visual interface',
    name: 'CrewAI provides a framework and visual interface',
    description: 'CrewAI provides a framework and visual interface',
    data: {
      title: 'CrewAI provides a framework and visual interface',
      tags: 'CrewAI provides a framework and visual interface CrewAI',
      content: `
        <p>
              CrewAI provides a framework and visual interface for building
              autonomous multi-agent systems. Crews are specialized AI agent
              teams (e.g., researcher, writer, analyst) designed for dynamic,
              creative tasks, while Flows handle structured, event-driven
              processes.
            </p>
            <p>
              It simplifies orchestration and coordination without dependency on
              langchain-like frameworks, offers prebuilt templates and no-code
              tools, and supports deployment in the cloud or on-premises. CrewAI
              integrates with any LLM and toolset, monitors agent performance,
              and enables automated improvements. It targets developers and
              enterprise users who need flexible, reliable automation for
              complex operations.
            </p>
            <div class="flex flex-col gap-4">
              <h2>Powerful Features:-</h2>
              <div class="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                <div class="flex items-start gap-4 rounded-[10px] p-4 dark:bg-darkBackground bg-white dark:border-[0px] border-[1px] border-gray-400/40">
                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-[1px] h-[48px] bg-secondary"></div>
                    <div class="flex items-center w-[48px] h-[48px] justify-center bg-blackish rounded-[10px]">
                      <img
                        src="src/assets/placeholders/insights.svg"
                        alt="Insights"
                        width={24}
                        height={24}
                        class="object- w-[24px] h-[24px]"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col justify-start gap-2">
                    <p class="text-h4 font-bold text-blackish dark:text-darkPrimaryText">
                      Instant Insights
                    </p>
                    <p class="text-p2 text-blackish dark:text-darkPrimaryText">
                      Transform raw data into actionable intelligence in
                      milliseconds, not hours.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4 rounded-[10px] p-4 dark:bg-darkBackground bg-white dark:border-[0px] border-[1px] border-gray-400/40">
                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-[1px] h-[48px] bg-secondary"></div>
                    <div class="flex items-center w-[48px] h-[48px] justify-center bg-blackish rounded-[10px]">
                      <img
                        src="src/assets/placeholders/insights.svg"
                        alt="Insights"
                        width={24}
                        height={24}
                        class="object- w-[24px] h-[24px]"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col justify-start gap-2">
                    <p class="text-h4 font-bold text-blackish dark:text-darkPrimaryText">
                      Instant Insights
                    </p>
                    <p class="text-p2 text-blackish dark:text-darkPrimaryText">
                      Transform raw data into actionable intelligence in
                      milliseconds, not hours.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4 rounded-[10px] p-4 dark:bg-darkBackground bg-white dark:border-[0px] border-[1px] border-gray-400/40">
                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-[1px] h-[48px] bg-secondary"></div>
                    <div class="flex items-center w-[48px] h-[48px] justify-center bg-blackish rounded-[10px]">
                      <img
                        src="src/assets/placeholders/insights.svg"
                        alt="Insights"
                        width={24}
                        height={24}
                        class="object- w-[24px] h-[24px]"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col justify-start gap-2">
                    <p class="text-h4 font-bold text-blackish dark:text-darkPrimaryText">
                      Instant Insights
                    </p>
                    <p class="text-p2 text-blackish dark:text-darkPrimaryText">
                      Transform raw data into actionable intelligence in
                      milliseconds, not hours.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4 rounded-[10px] p-4 dark:bg-darkBackground bg-white dark:border-[0px] border-[1px] border-gray-400/40">
                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-[1px] h-[48px] bg-secondary"></div>
                    <div class="flex items-center w-[48px] h-[48px] justify-center bg-blackish rounded-[10px]">
                      <img
                        src="src/assets/placeholders/insights.svg"
                        alt="Insights"
                        width={24}
                        height={24}
                        class="object- w-[24px] h-[24px]"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col justify-start gap-2">
                    <p class="text-h4 font-bold text-blackish dark:text-darkPrimaryText">
                      Instant Insights
                    </p>
                    <p class="text-p2 text-blackish dark:text-darkPrimaryText">
                      Transform raw data into actionable intelligence in
                      milliseconds, not hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <h2>How Does It Work?</h2>
              <p>
                CrewAI divides tasks into autonomous Crews and structured Flows.
                Users design agents with roles and tools, then orchestrate
                actions using Python or UI templates. Crews collaborate on
                unstructured tasks, delegating subtasks. Flows manage precise
                workflows with conditional branching and event triggers. The
                platform provides deployment tools—CLI and web—plus monitoring,
                logs, and performance dashboards. Models self-improve via
                iterative training grounded in analytics.
              </p>
            </div>
            <div class="flex flex-col gap-4">
              <h2>Step-by-Step Overview:-</h2>
              <ol class="list-decimal list-inside flex flex-col gap-2">
                <li>Install CrewAI via Python or access UI Studio</li>
                <li>Install CrewAI via Python or access UI Studio</li>
                <li>Install CrewAI via Python or access UI Studio</li>
                <li>Install CrewAI via Python or access UI Studio</li>
              </ol>
            </div>
            <div class="flex flex-col gap-4">
              <h2>Ideal Users for CrewAI :</h2>
              <div class="flex items-center gap-4 flex-wrap">
                <div class="px-4 py-2 rounded-[10px] border-[2px] max-w-fit dark:border-secondary border-tirtiary">
                  Python Agent
                </div>
                <div class="px-4 py-2 rounded-[10px] border-[2px] max-w-fit dark:border-secondary border-tirtiary">
                  Python Agent
                </div>
                <div class="px-4 py-2 rounded-[10px] border-[2px] max-w-fit dark:border-secondary border-tirtiary">
                  Python Agent
                </div>
                <div class="px-4 py-2 rounded-[10px] border-[2px] max-w-fit dark:border-secondary border-tirtiary">
                  Python Agent
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <h2>How to Deploy and Integrate?</h2>
              <ol class="list-decimal list-inside flex flex-col gap-2">
                <li>Install CrewAI via Python or access UI Studio</li>
                <li>Install CrewAI via Python or access UI Studio</li>
                <li>Install CrewAI via Python or access UI Studio</li>
                <li>Install CrewAI via Python or access UI Studio</li>
              </ol>
            </div>
            <div class="flex flex-col gap-4">
              <h2>Pricing Plan</h2>
              <ol class="list-decimal list-inside flex flex-col gap-2">
                <li>Install CrewAI via Python or access UI Studio</li>
                <li>Install CrewAI via Python or access UI Studio</li>
                <li>Install CrewAI via Python or access UI Studio</li>
                <li>Install CrewAI via Python or access UI Studio</li>
              </ol>
            </div>
            <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-4 w-full">
              <section class="flex flex-col items-center rounded-[10px] border-[1px] dark:border-secondary border-tirtiary overflow-auto w-full">
                <header class="p-2 bg-gradient-light w-full text-center text-blackish font-bold text-h5">
                  Pros
                </header>
                <div class="flex flex-col w-full">
                  <div class="flex p-4 capitalize items-center gap-2 border-b-[1px] border-b-gray-400/40">
                    Pro item 1
                  </div>
                  <div class="flex p-4 capitalize items-center gap-2">
                    Pro item 2
                  </div>
                </div>
              </section>
              <section class="flex flex-col items-center rounded-[10px] border-[1px] dark:border-secondary border-tirtiary overflow-auto w-full">
                <header class="p-2 bg-gradient-light w-full text-center text-blackish font-bold text-h5">
                  Cons
                </header>
                <div class="flex flex-col w-full">
                  <div class="flex p-4 capitalize items-center gap-2 border-b-[1px] border-b-gray-400/40">
                    Con item 1
                  </div>
                  <div class="flex p-4 capitalize items-center gap-2">
                    Con item 2
                  </div>
                </div>
              </section>
            </div>

            <div class="flex flex-col gap-4">
              <h2>Case Studies</h2>
              <div class="flex flex-col gap-4">
                <div class="border-[1px] dark:border-secondary border-tirtiary rounded-[10px] px-7 py-4 max-lg:px-4 flex flex-col gap-4">
                  <h3 class="text-h3 font-bold text-gradient">
                    Case Study 1: Financial Report Generation
                  </h3>
                  <p class="text-p1 text-blackish dark:text-darkPrimaryText">
                    A fintech firm built a Crew of agents to gather market data,
                    draft reports, and refine analysis. This reduced report
                    delivery time by 70% while ensuring accuracy, using
                    structured interaction between the researcher and summarizer
                    agents.
                  </p>
                </div>
                <div class="border-[1px] dark:border-secondary border-tirtiary rounded-[10px] px-7 py-4 max-lg:px-4 flex flex-col gap-4">
                  <h3 class="text-h3 font-bold text-gradient">
                    Case Study 1: Financial Report Generation
                  </h3>
                  <p class="text-p1 text-blackish dark:text-darkPrimaryText">
                    A fintech firm built a Crew of agents to gather market data,
                    draft reports, and refine analysis. This reduced report
                    delivery time by 70% while ensuring accuracy, using
                    structured interaction between the researcher and summarizer
                    agents.
                  </p>
                </div>
              </div>
            </div>
      `,
    },
  },
  {
    id: 'crew-ai-article',
    name: 'Crew AI Article',
    description: 'A detailed article about Crew AI with various sections.',
    data: {
      title: 'Crew AI: A Framework for Autonomous Multi-Agent Systems',
      tags: 'ai, crewai, multi-agent, automation',
      content: `
        <p>
          CrewAI provides a framework and visual interface for building
          autonomous multi-agent systems. Crews are specialized AI agent
          teams (e.g., researcher, writer, analyst) designed for dynamic,
          creative tasks, while Flows handle structured, event-driven
          processes.
        </p>
        <p>
          It simplifies orchestration and coordination without dependency on
          langchain-like frameworks, offers prebuilt templates and no-code
          tools, and supports deployment in the cloud or on-premises. CrewAI
          integrates with any LLM and toolset, monitors agent performance,
          and enables automated improvements. It targets developers and
          enterprise users who need flexible, reliable automation for
          complex operations.
        </p>
        <div class="flex flex-col gap-4">
          <h2>Powerful Features:-</h2>
          <div class="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            <div class="flex items-start gap-4 rounded-[10px] p-4 dark:bg-darkBackground bg-white dark:border-[0px] border-[1px] border-gray-400/40">
              <div class="flex items-center gap-2 mt-1">
                <div class="w-[1px] h-[48px] bg-secondary"></div>
                <div class="flex items-center w-[48px] h-[48px] justify-center bg-blackish rounded-[10px]">
                  <img
                    src="src/assets/placeholders/insights.svg"
                    alt="Insights"
                    width="24"
                    height="24"
                    class="object- w-[24px] h-[24px]"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-start gap-2">
                <p class="text-h4 font-bold text-blackish dark:text-darkPrimaryText">
                  Instant Insights
                </p>
                <p class="text-p2 text-blackish dark:text-darkPrimaryText">
                  Transform raw data into actionable intelligence in
                  milliseconds, not hours.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4 rounded-[10px] p-4 dark:bg-darkBackground bg-white dark:border-[0px] border-[1px] border-gray-400/40">
              <div class="flex items-center gap-2 mt-1">
                <div class="w-[1px] h-[48px] bg-secondary"></div>
                <div class="flex items-center w-[48px] h-[48px] justify-center bg-blackish rounded-[10px]">
                  <img
                    src="src/assets/placeholders/insights.svg"
                    alt="Insights"
                    width="24"
                    height="24"
                    class="object- w-[24px] h-[24px]"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-start gap-2">
                <p class="text-h4 font-bold text-blackish dark:text-darkPrimaryText">
                  Instant Insights
                </p>
                <p class="text-p2 text-blackish dark:text-darkPrimaryText">
                  Transform raw data into actionable intelligence in
                  milliseconds, not hours.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4 rounded-[10px] p-4 dark:bg-darkBackground bg-white dark:border-[0px] border-[1px] border-gray-400/40">
              <div class="flex items-center gap-2 mt-1">
                <div class="w-[1px] h-[48px] bg-secondary"></div>
                <div class="flex items-center w-[48px] h-[48px] justify-center bg-blackish rounded-[10px]">
                  <img
                    src="src/assets/placeholders/insights.svg"
                    alt="Insights"
                    width="24"
                    height="24"
                    class="object- w-[24px] h-[24px]"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-start gap-2">
                <p class="text-h4 font-bold text-blackish dark:text-darkPrimaryText">
                  Instant Insights
                </p>
                <p class="text-p2 text-blackish dark:text-darkPrimaryText">
                  Transform raw data into actionable intelligence in
                  milliseconds, not hours.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4 rounded-[10px] p-4 dark:bg-darkBackground bg-white dark:border-[0px] border-[1px] border-gray-400/40">
              <div class="flex items-center gap-2 mt-1">
                <div class="w-[1px] h-[48px] bg-secondary"></div>
                <div class="flex items-center w-[48px] h-[48px] justify-center bg-blackish rounded-[10px]">
                  <img
                    src="src/assets/placeholders/insights.svg"
                    alt="Insights"
                    width="24"
                    height="24"
                    class="object- w-[24px] h-[24px]"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-start gap-2">
                <p class="text-h4 font-bold text-blackish dark:text-darkPrimaryText">
                  Instant Insights
                </p>
                <p class="text-p2 text-blackish dark:text-darkPrimaryText">
                  Transform raw data into actionable intelligence in
                  milliseconds, not hours.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h2>How Does It Work?</h2>
          <p>
            CrewAI divides tasks into autonomous Crews and structured Flows.
            Users design agents with roles and tools, then orchestrate
            actions using Python or UI templates. Crews collaborate on
            unstructured tasks, delegating subtasks. Flows manage precise
            workflows with conditional branching and event triggers. The
            platform provides deployment tools—CLI and web—plus monitoring,
            logs, and performance dashboards. Models self-improve via
            iterative training grounded in analytics.
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <h2>Step-by-Step Overview:-</h2>
          <ol class="list-decimal list-inside flex flex-col gap-2">
            <li>Install CrewAI via Python or access UI Studio</li>
            <li>Install CrewAI via Python or access UI Studio</li>
            <li>Install CrewAI via Python or access UI Studio</li>
            <li>Install CrewAI via Python or access UI Studio</li>
          </ol>
        </div>
        <div class="flex flex-col gap-4">
          <h2>Ideal Users for CrewAI :</h2>
          <div class="flex items-center gap-4 flex-wrap">
            <div class="px-4 py-2 rounded-[10px] border-[2px] max-w-fit dark:border-secondary border-tirtiary">
              Python Agent
            </div>
            <div class="px-4 py-2 rounded-[10px] border-[2px] max-w-fit dark:border-secondary border-tirtiary">
              Python Agent
            </div>
            <div class="px-4 py-2 rounded-[10px] border-[2px] max-w-fit dark:border-secondary border-tirtiary">
              Python Agent
            </div>
            <div class="px-4 py-2 rounded-[10px] border-[2px] max-w-fit dark:border-secondary border-tirtiary">
              Python Agent
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h2>How to Deploy and Integrate?</h2>
          <ol class="list-decimal list-inside flex flex-col gap-2">
            <li>Install CrewAI via Python or access UI Studio</li>
            <li>Install CrewAI via Python or access UI Studio</li>
            <li>Install CrewAI via Python or access UI Studio</li>
            <li>Install CrewAI via Python or access UI Studio</li>
          </ol>
        </div>
        <div class="flex flex-col gap-4">
          <h2>Pricing Plan</h2>
          <ol class="list-decimal list-inside flex flex-col gap-2">
            <li>Install CrewAI via Python or access UI Studio</li>
            <li>Install CrewAI via Python or access UI Studio</li>
            <li>Install CrewAI via Python or access UI Studio</li>
            <li>Install CrewAI via Python or access UI Studio</li>
          </ol>
        </div>
        <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-4 w-full">
          <section class="flex flex-col items-center rounded-[10px] border-[1px] dark:border-secondary border-tirtiary overflow-auto w-full">
            <header class="p-2 bg-gradient-light w-full text-center text-blackish font-bold text-h5">
              Pros
            </header>
            <div class="flex flex-col w-full">
              <div class="flex p-4 capitalize items-center gap-2 border-b-[1px] border-b-gray-400/40">
                Pro item 1
              </div>
              <div class="flex p-4 capitalize items-center gap-2">
                Pro item 2
              </div>
            </div>
          </section>
          <section class="flex flex-col items-center rounded-[10px] border-[1px] dark:border-secondary border-tirtiary overflow-auto w-full">
            <header class="p-2 bg-gradient-light w-full text-center text-blackish font-bold text-h5">
              Cons
            </header>
            <div class="flex flex-col w-full">
              <div class="flex p-4 capitalize items-center gap-2 border-b-[1px] border-b-gray-400/40">
                Con item 1
              </div>
              <div class="flex p-4 capitalize items-center gap-2">
                Con item 2
              </div>
            </div>
          </section>
        </div>

        <div class="flex flex-col gap-4">
          <h2>Case Studies</h2>
          <div class="flex flex-col gap-4">
            <div class="border-[1px] dark:border-secondary border-tirtiary rounded-[10px] px-7 py-4 max-lg:px-4 flex flex-col gap-4">
              <h3 class="text-h3 font-bold text-gradient">
                Case Study 1: Financial Report Generation
              </h3>
              <p class="text-p1 text-blackish dark:text-darkPrimaryText">
                A fintech firm built a Crew of agents to gather market data,
                draft reports, and refine analysis. This reduced report
                delivery time by 70% while ensuring accuracy, using
                structured interaction between the researcher and summarizer
                agents.
              </p>
            </div>
            <div class="border-[1px] dark:border-secondary border-tirtiary rounded-[10px] px-7 py-4 max-lg:px-4 flex flex-col gap-4">
              <h3 class="text-h3 font-bold text-gradient">
                Case Study 1: Financial Report Generation
              </h3>
              <p class="text-p1 text-blackish dark:text-darkPrimaryText">
                A fintech firm built a Crew of agents to gather market data,
                draft reports, and refine analysis. This reduced report
                delivery time by 70% while ensuring accuracy, using
                structured interaction between the researcher and summarizer
                agents.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  },
];

export const Templates: React.FC<TemplatesProps> = ({ onSelectTemplate }) => {
  return (
    <div className="p-6 bg-white rounded-b-xl min-h-[26rem]">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Choose a Starting Point</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((template) => (
          <div key={template.id} className="flex flex-col border bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="p-4">
              <h3 className="font-bold text-slate-800">{template.name}</h3>
              <p className="text-sm text-slate-500 mb-3">{template.description}</p>
            </div>
            {/* Mini Preview */}
            <div className="flex-grow h-48 bg-white border-y overflow-hidden relative">
              <div className="origin-top-left scale-[.35] absolute">
                <div className="prose w-[800px] p-4" dangerouslySetInnerHTML={{ __html: template.data.content }} />
              </div>
            </div>
            <button
              onClick={() => onSelectTemplate(template.data)}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-b-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;