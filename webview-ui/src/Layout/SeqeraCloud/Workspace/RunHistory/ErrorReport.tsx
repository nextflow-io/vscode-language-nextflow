import { useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

const ErrorReport = ({ errorReport }: { errorReport: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!errorReport) return null;

  const firstLine = errorReport.split("\n")[0];

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(errorReport);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.errorReport}>
      <div
        className={styles.errorPreview}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        <div className={styles.errorContent}>
          {isExpanded ? errorReport : `${firstLine}...`}
        </div>
        <button
          className={clsx(
            copied ? "codicon codicon-check" : "codicon codicon-copy",
            styles.copyButton
          )}
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy error report"}
        ></button>
      </div>
    </div>
  );
};

export default ErrorReport;
