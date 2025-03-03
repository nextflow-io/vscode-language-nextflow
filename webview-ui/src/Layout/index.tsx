import FileTree from "./FileTree";

const Layout = () => {
  return (
    <>
      <FileTree name="Workflows" type="workflow" />
      <FileTree name="Processes" type="process" />
    </>
  );
};

export default Layout;
