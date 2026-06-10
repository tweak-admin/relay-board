/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useId } from "react";
import { X, Check } from "lucide-react";

// ==========================================
// 1. BUTTON
// ==========================================
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const baseStyle = "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
      primary: "bg-neutral-900 hover:bg-neutral-800 text-white shadow-sm border border-transparent",
      secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm",
      ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-transparent",
      destructive: "bg-red-600 hover:bg-red-700 text-white shadow-sm border border-transparent focus:ring-red-600"
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-5 py-2.5 text-base"
    };

    return (
      <button
        ref={ref}
        className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";


// ==========================================
// 2. BADGE
// ==========================================
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "brand" | "success" | "warning" | "error";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = "neutral", className = "", children, ...props }) => {
  const baseStyle = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border";
  
  const variants = {
    neutral: "bg-gray-50 text-gray-600 border-gray-200",
    brand: "bg-violet-50 text-violet-700 border-violet-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    error: "bg-red-50 text-red-700 border-red-200"
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};


// ==========================================
// 3. CARD
// ==========================================
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", children, ...props }) => (
  <div className={`bg-white border border-gray-200 rounded-xl shadow-xs overflow-hidden ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", children, ...props }) => (
  <div className={`px-6 py-4 border-b border-gray-100 ${className}`} {...props}>
    {children}
  </div>
);

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", children, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", children, ...props }) => (
  <div className={`px-6 py-4 border-t border-gray-100 bg-gray-50/50 ${className}`} {...props}>
    {children}
  </div>
);


// ==========================================
// 4. AVATAR
// ==========================================
interface AvatarProps {
  src?: string;
  name?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, name = "User", className = "" }) => {
  const [error, setError] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className={`relative flex shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-100 ${className}`}>
      {!error && src ? (
        <img
          src={src}
          alt={name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="aspect-square h-full w-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-gray-600 bg-gray-100">
          {initials || "?"}
        </div>
      )}
    </div>
  );
};


// ==========================================
// 5. FORM INPUTS
// ==========================================
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={`block w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:ring-offset-0 disabled:opacity-50 transition-all ${className}`}
      {...props}
    />
  )
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      rows={4}
      className={`block w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-50 transition-all ${className}`}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className = "", children, ...props }, ref) => (
    <select
      ref={ref}
      className={`block w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", label, id, ...props }, ref) => {
    const defaultId = useId();
    const targetId = id || defaultId;
    return (
      <div className="flex items-center space-x-2">
        <input
          id={targetId}
          ref={ref}
          type="checkbox"
          className={`h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 transition-all cursor-pointer ${className}`}
          {...props}
        />
        {label && (
          <label htmlFor={targetId} className="text-sm font-medium text-gray-600 cursor-pointer select-none">
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";


// ==========================================
// 6. SWITCH (TOGGLE)
// ==========================================
interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label, className = "" }) => {
  const switchId = useId();
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
          checked ? "bg-neutral-900" : "bg-gray-200"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      {label && (
        <label htmlFor={switchId} className="text-sm font-medium text-gray-600 cursor-pointer select-none">
          {label}
        </label>
      )}
    </div>
  );
};


// ==========================================
// 7. DIALOG (MODAL)
// ==========================================
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-neutral-950/60 transition-opacity" onClick={onClose} />

        {/* Modal Box */}
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all w-full max-w-lg p-6 border border-gray-100 z-10 animate-in fade-in zoom-in-95 duration-200">
          <button
            type="button"
            className="absolute right-4 top-4 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 8. SHEET (DRAWER)
// ==========================================
interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Sheet: React.FC<SheetProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-all ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-neutral-950/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`relative z-10 w-full max-w-md h-full bg-white shadow-2xl border-l border-gray-200 flex flex-col transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <h2 className="text-lg font-semibold text-gray-900">{title || "Detail Panel"}</h2>
          <button
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            onClick={onClose}
            aria-label="Close drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 z-0">{children}</div>
      </div>
    </div>
  );
};


// ==========================================
// 9. DROPDOWN MENU
// ==========================================
interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}

export const DropdownMenu: React.FC<DropdownProps> = ({ trigger, children, align = "right", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 w-56 rounded-xl bg-white border border-gray-200 shadow-lg ring-1 ring-black/5 focus:outline-none z-40 p-1 divide-y divide-gray-100 animate-in fade-in slide-in-from-top-2 duration-150`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const DropdownItem: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = "" }) => (
  <button
    role="menuitem"
    onClick={onClick}
    className={`flex w-full items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg text-left transition-colors cursor-pointer ${className}`}
  >
    {children}
  </button>
);


// ==========================================
// 10. TABS
// ==========================================
interface TabsProps {
  tabs: { id: string; label: string; count?: number }[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange, className = "" }) => {
  return (
    <div className={`border-b border-gray-200 overflow-x-auto scrollbar-none ${className}`}>
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all focus:outline-none cursor-pointer ${
                isActive
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <div className="flex items-center space-x-2">
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`ml-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                      isActive ? "bg-neutral-900 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};


// ==========================================
// 11. ACCORDION
// ==========================================
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpenDefault?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const headingId = useId();
  const contentId = useId();

  return (
    <div className="border-b border-gray-200 py-3">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          id={headingId}
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between py-2 text-left font-medium text-gray-900 hover:text-brand-600 transition-colors cursor-pointer"
        >
          <span className="text-base font-semibold group">{title}</span>
          <span className="ml-6 flex h-7 items-center">
            <svg
              className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={headingId}
        className={`transition-all duration-200 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100 mt-2 pb-2" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
};


// ==========================================
// 12. TOOLTIP
// ==========================================
interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs px-2.5 py-1.5 bg-neutral-950 text-white text-xs font-medium rounded-md shadow-md z-50 pointer-events-none animate-in fade-in fill-mode-both duration-150">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-width border-t-neutral-950 border-r-transparent border-b-transparent border-l-transparent border-4" />
        </div>
      )}
    </div>
  );
};


// ==========================================
// 13. TABLE PRIMITIVES
// ==========================================
export const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({ className = "", children, ...props }) => (
  <div className="w-full overflow-x-auto border border-gray-200 rounded-xl bg-white shadow-xs">
    <table className={`w-full min-w-full text-left border-collapse ${className}`} {...props}>
      {children}
    </table>
  </div>
);

export const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ className = "", children, ...props }) => (
  <thead className={`bg-gray-50 border-b border-gray-200 ${className}`} {...props}>
    {children}
  </thead>
);

export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ className = "", children, ...props }) => (
  <tbody className={`divide-y divide-gray-200 ${className}`} {...props}>
    {children}
  </tbody>
);

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ className = "", children, ...props }) => (
  <tr className={`hover:bg-gray-50/55 transition-colors ${className}`} {...props}>
    {children}
  </tr>
);

export const TableHead: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({ className = "", children, ...props }) => (
  <th className={`px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap ${className}`} {...props}>
    {children}
  </th>
);

export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({ className = "", children, ...props }) => (
  <td className={`px-6 py-4 text-sm text-gray-700 whitespace-nowrap ${className}`} {...props}>
    {children}
  </td>
);
