'use client';

import clsx from 'clsx';
import React, { useRef } from 'react';

export function Prose({
  children,
  className,
  collapsed,
}: {
  children: React.ReactNode;
  className?: string;
  collapsed?: boolean;
}) {
  const isCollapsible = typeof collapsed === 'boolean';
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed ?? false);
  const contentId = React.useId();

  const toggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    if (newState) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={clsx(className)}>
      <div
        id={contentId}
        role={isCollapsible ? 'region' : undefined}
        aria-hidden={isCollapsible && isCollapsed}
        aria-expanded={isCollapsible && !isCollapsed}
        className={clsx(
          'transition-all duration-300 ease-in-out',
          {
            'h-0 overflow-hidden opacity-0 pointer-events-none': isCollapsible && isCollapsed,
            'opacity-100 h-auto': isCollapsible && !isCollapsed,
          }
        )}
      >
        {children}
      </div>

      {isCollapsible && (
        <button
          onClick={toggleCollapse}
          aria-controls={contentId}
          aria-expanded={!isCollapsed}
          className="mt-4 rounded-sm bg-gray-800 px-1.5 py-1 text-xs leading-none font-semibold whitespace-nowrap text-gray-300 tabular-nums hover:bg-gray-500 hover:text-white"
        >
          {isCollapsed ? 'More' : 'Less'}
        </button>
      )}
    </div>
  );
}
