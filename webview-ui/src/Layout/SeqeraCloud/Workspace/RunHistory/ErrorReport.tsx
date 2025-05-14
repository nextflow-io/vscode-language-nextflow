import { useState } from "react";

import styles from "./styles.module.css";

const ErrorReport = ({ errorReport }: { errorReport: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!errorReport) return null;

  const firstLine = errorReport.split("\n")[0];

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
        {isExpanded ? errorReport : `${firstLine}...`}
      </div>
    </div>
  );
};

export default ErrorReport;
