import Button from "../../../components/Button";
import styles from "./styles.module.css";

interface ResourceLink {
  label: string;
  url: string;
}

const resources: ResourceLink[] = [
  {
    label: "Nextflow Training & Getting Started",
    url: "https://training.nextflow.io/latest/"
  },
  {
    label: "Nextflow Documentation",
    url: "https://nextflow.io/docs/latest/index.html"
  },
  {
    label: "Feedback Portal",
    url: "https://feedback.seqera.io/"
  },
  {
    label: "Community Forum",
    url: "https://community.seqera.io/"
  },
  {
    label: "Seqera Platform Documentation",
    url: "https://docs.seqera.io/"
  }
];

type Props = {
  showIntro?: boolean;
};

export const Resources: React.FC<Props> = ({ showIntro = false }) => {
  return (
    <div>
      <h2 className={styles.title}>Resources</h2>
      {showIntro && (
        <p className={styles.intro}>
          To get started, use the login button above to access your account.
          Below you'll find helpful resources to learn about Nextflow, get
          support, and explore the platform's features.
        </p>
      )}
      <ul className={styles.list}>
        {resources.map((resource, index) => (
          <li key={index}>
            <Button href={resource.url} small fullWidth>
              {resource.label}
              <i className="codicon codicon-link-external ml-2" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
