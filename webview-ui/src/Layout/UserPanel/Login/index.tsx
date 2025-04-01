import clsx from "clsx";
import Button from "../../../components/Button";
import { useWorkspaceContext, useTowerContext } from "../../../Context";
import { formatTime } from "../utils";

import styles from "./styles.module.css";

const Login = () => {
  const { login } = useWorkspaceContext();
  const { tokenExpiry, hasToken, error } = useTowerContext();

  let tokenExpired = false;
  if (tokenExpiry) tokenExpired = tokenExpiry < Date.now() / 1000;

  return (
    <div>
      <div className={clsx(styles.section, styles.centered)}>
        <div>
          {error && (
            <div>
              <p>Error: {error}</p>
            </div>
          )}
          {hasToken && tokenExpired && (
            <div>
              <p>Token expired: {formatTime(tokenExpiry)}</p>
            </div>
          )}
          <Button onClick={login}>Login to Seqera Platform</Button>
        </div>
      </div>
      <div className={clsx(styles.section, styles.centered)}>
        <Button href="https://seqera.io/ask-ai">Talk to Seqera AI</Button>
      </div>
    </div>
  );
};

export default Login;
