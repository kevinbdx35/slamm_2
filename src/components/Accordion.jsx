import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items, variant }) {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const renderSummaryContent = (item) => {
    if (variant === 'hygiene') {
      return (
        <span className="flex items-center gap-2 w-full">
          <span className="flex-1">{item.title}</span>
          {item.priorityLabel && (
            <span className={`text-xs font-medium px-2 py-0.5 border rounded ${item.priorityColor || ''}`}>
              {item.priorityLabel}
            </span>
          )}
        </span>
      );
    }
    return item.question || item.title;
  };

  const renderDetailsContent = (item) => {
    if (item.answerHtml) {
      return (
        <div
          className="text-sm leading-relaxed tracking-wide"
          dangerouslySetInnerHTML={{ __html: item.answerHtml }}
        />
      );
    }
    return (
      <p className="text-sm leading-relaxed tracking-wide">
        {item.answer || item.content}
      </p>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => {
        const id = item.id || `panel-${index}`;
        const isOpen = expanded === id;
        return (
          <div key={id} className="border border-outline/30 dark:border-outline-dark/30 rounded-md3 overflow-hidden bg-surface dark:bg-surface-dark">
            <button
              onClick={() => toggle(id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`${id}-content`}
              id={`${id}-header`}
            >
              <span className="flex-1 font-medium">
                {renderSummaryContent(item)}
              </span>
              <ChevronDown
                size={20}
                className={`ml-2 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              id={`${id}-content`}
              role="region"
              aria-labelledby={`${id}-header`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-4 pb-4">
                {renderDetailsContent(item)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
