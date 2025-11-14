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
    id: 'minimalist',
    name: 'Minimalist Post',
    description: 'A clean, simple layout focusing on typography and content.',
    data: {
      title: 'The Art of Simplicity',
      tags: 'design, minimalist, lifestyle',
      content: `
        <h1>The Core Principles of Minimalist Design</h1>
        <p>Minimalism is not just an aesthetic; it's a principle that can be applied to many areas of life. In design, it emphasizes the use of only essential elements.</p>
        <h2>Key Characteristics</h2>
        <ul>
          <li><strong>Simplicity:</strong> Less is more. Focus on the core message.</li>
          <li><strong>White Space:</strong> Ample use of negative space to give elements breathing room.</li>
          <li><strong>Typography:</strong> Bold, clean fonts are often the primary visual element.</li>
        </ul>
        <p>By stripping away the superfluous, you can create a more powerful and direct user experience.</p>
      `,
    },
  },
  {
    id: 'listicle',
    name: 'Listicle / Top 5',
    description: 'A numbered list format, perfect for "Top X" articles.',
    data: {
      title: 'Top 5 Reasons to Learn a New Language',
      tags: 'learning, productivity, self-improvement',
      content: `
        <h1>Top 5 Reasons to Learn a New Language</h1>
        <p>Learning a new language can be one of the most rewarding experiences. Here are the top five reasons why you should start today.</p>
        <ol>
          <li><strong>Boost Your Brain Power:</strong> Studies show that bilingualism can improve cognitive functions.</li>
          <li><strong>Enhance Your Career Opportunities:</strong> Being multilingual is a highly sought-after skill in the global job market.</li>
          <li><strong>Connect with Other Cultures:</strong> Language is the doorway to understanding different cultures and perspectives.</li>
          <li><strong>Travel with Confidence:</strong> Navigating a foreign country becomes much easier and more immersive.</li>
          <li><strong>Improve Your Native Language:</strong> You become more aware of the grammar and structure of your own language.</li>
        </ol>
      `,
    },
  },
  {
    id: 'product-review',
    name: 'Product Review',
    description: 'A template for reviewing products with pros and cons.',
    data: {
      title: 'The Ultimate Mechanical Keyboard Review',
      tags: 'tech, review, keyboard, gadgets',
      content: `
        <h1>The Ultimate Mechanical Keyboard Review</h1>
        <p>After a month of daily use, here are my thoughts on the new "CodeMaster Pro" keyboard.</p>
        <img src="https://images.unsplash.com/photo-1618384887924-3b07c9a0c9c2?q=80&w=2070" alt="Keyboard" />
        <h2>The Good (Pros)</h2>
        <ul>
          <li>Excellent tactile feedback.</li>
          <li>Solid aluminum build quality.</li>
          <li>Customizable RGB lighting.</li>
        </ul>
        <h2>The Not-So-Good (Cons)</h2>
        <ul>
          <li>It's quite loud, which might bother coworkers.</li>
          <li>The software for customization is a bit clunky.</li>
        </ul>
        <h3>Final Verdict</h3>
        <p>Despite a few minor flaws, this is one of the best keyboards I've ever used. Highly recommended for enthusiasts.</p>
      `,
    },
  },
  {
    id: 'tech-tutorial',
    name: 'Tech Tutorial',
    description: 'A structured format for technical guides with code blocks.',
    data: {
      title: 'Getting Started with React Hooks',
      tags: 'react, tutorial, javascript, webdev',
      content: `
        <h1>A Guide to Your First React Hook</h1>
        <p>React Hooks allow you to use state and other React features without writing a class. Let's look at the most common one: <code>useState</code>.</p>
        <pre class="ql-syntax" spellcheck="false">
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
        </pre>
        <h2>Conclusion</h2>
        <p>As you can see, <code>useState</code> provides a simple and powerful way to add state to your functional components.</p>
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
                    src="/assets/placeholders/insights.svg"
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
                    src="/assets/placeholders/insights.svg"
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
                    src="/assets/placeholders/insights.svg"
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
                    src="/assets/placeholders/insights.svg"
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