import Button from "../../../components/Button";
import { useWorkspaceContext, useTowerContext } from "../../../Context";
import { formatTime } from "./utils";

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
            Login to Seqera Cloud
            <i className="codicon codicon-sign-in ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Login;
