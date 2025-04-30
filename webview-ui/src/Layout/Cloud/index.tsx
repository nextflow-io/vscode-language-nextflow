import { useEffect } from "react";
import { useRef } from "react";
import { useTowerContext, useWorkspaceContext } from "../../Context";

import Login from "./Login";
import Workspace from "./Workspace";
import Toolbar from "./Toolbar";

const Cloud = () => {
  const { tokenExpiry, hasToken, repoInfo } = useTowerContext();
  const { refresh } = useWorkspaceContext();

  let tokenExpired = false;
  if (tokenExpiry) tokenExpired = tokenExpiry < Date.now() / 1000;
  const showLogin = !hasToken || tokenExpired;

  const { isAuthenticated } = useTowerContext();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Note: This effect ensures that we have the needed state after the component
  // mounts (it usually does, but not always). Would be good to find a better
  // way of doing this.

  useEffect(() => {
    if (isAuthenticated && repoInfo?.name) {
      const ref = timeoutRef.current;
      if (!ref) return;
      clearTimeout(ref);
      timeoutRef.current = null;
    } else {
      timeoutRef.current = setTimeout(refresh, 1000);
    }
  }, [isAuthenticated, repoInfo?.name]);

  return (
    <>
      <Toolbar />
      {showLogin ? <Login /> : <Workspace />}
    </>
  );
};

export default Cloud;
