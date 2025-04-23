import { useEffect } from "react";
import { useRef } from "react";
import { useTowerContext } from "../../Context";

import Login from "./Login";
import Workspace from "./Workspace";
import Toolbar from "./Toolbar";

const Cloud = () => {
  const { tokenExpiry, hasToken, refresh } = useTowerContext();

  let tokenExpired = false;
  if (tokenExpiry) tokenExpired = tokenExpiry < Date.now() / 1000;
  const showLogin = !hasToken || tokenExpired;

  const { isAuthenticated } = useTowerContext();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Hacky fix for empty auth state we get sometimes
    // TODO: find out why this is happening
    if (isAuthenticated) {
      const ref = timeoutRef.current;
      if (!ref) return;
      clearTimeout(ref);
      timeoutRef.current = null;
    } else {
      timeoutRef.current = setTimeout(refresh, 1000);
    }
  }, [isAuthenticated]);

  return (
    <>
      <Toolbar />
      {showLogin ? <Login /> : <Workspace />}
    </>
  );
};

export default Cloud;
