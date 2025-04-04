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
      <section className="centered">
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
          <Button onClick={login}>
            Login to Seqera Platform
            <i className="codicon codicon-sign-in ml-2" />
          </Button>
        </div>
      </section>
      <section>
        <OpenChat />
      </section>
      <section>
        <Resources showIntro />
      </section>
    </div>
  );
};

export default Login;
