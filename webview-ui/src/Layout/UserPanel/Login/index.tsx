import Button from "../../../components/Button";
import { useWorkspaceContext, useTowerContext } from "../../../Context";
import { formatTime } from "../utils";
import { Resources } from "../Resources";
import OpenChat from "../OpenChat";

const Login = () => {
  const { login } = useWorkspaceContext();
  const { tokenExpiry, hasToken, error } = useTowerContext();

  let tokenExpired = false;
  if (tokenExpiry) tokenExpired = tokenExpiry < Date.now() / 1000;

  return (
    <div>
      <section className="centered cozy">
        <div className="mt-2">
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
          <Button onClick={login}>
            Login to Seqera Platform
            <i className="codicon codicon-sign-in ml-2" />
          </Button>
        </div>
      </section>
      <section className="cozy">
        <Resources showIntro />
      </section>
      <section className="cozy">
        <OpenChat />
      </section>
    </div>
  );
};

export default Login;
