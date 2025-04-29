import { useState, useEffect } from "react";
import { useWorkspaceContext } from "../../Context";
import Select from "../../components/Select";
import Input from "../../components/Input";
import styles from "./styles.module.css";
import { getVscode } from "../../Context/utils";

// Define a module item type based on the JSON structure
type ModuleItem = {
  name: string;
  path: string;
  type: string;
  meta: {
    name: string;
    description: string;
    keywords: string[];
    tools: Array<Record<string, any>>;
    input?: any[];
    output?: any[];
    authors?: string[];
    maintainers?: string[];
  };
  pipelines?: Array<{ name: string; version: string }>;
};

const Modules = () => {
  const {} = useWorkspaceContext();
  const vscode = getVscode();
  const [modules, setModules] = useState<ModuleItem[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  
  useEffect(() => {
    // Load the modules from the components_mini.json file
    fetch(new URL('../../assets/components.json', import.meta.url).href)
      .then(response => response.json())
      .then(data => {
        if (data.modules) {
          setModules(data.modules);
        }
      })
      .catch(error => console.error("Error loading modules:", error));
  }, []);

  // Sort and filter modules
  let filteredModules = [...modules];
  
  // Apply search filter
  if (search) {
    filteredModules = filteredModules.filter(module => 
      module.name.toLowerCase().includes(search.toLowerCase()) ||
      module.meta.description.toLowerCase().includes(search.toLowerCase()) ||
      module.meta.keywords.some(keyword => 
        keyword.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
  
  // Apply sorting
  filteredModules.sort((a, b) => {
    if (sortBy === "popularity") {
      const aCount = a.pipelines?.length || 0;
      const bCount = b.pipelines?.length || 0;
      return bCount - aCount; // Descending order
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const handleInstallModule = (moduleName: string) => {
    const command = `nf-core modules install ${moduleName}`;
    vscode.postMessage({
      command: "runCommand",
      text: command
    });
  };

  return (
    <>
      <div className={styles.filters}>
        <Input
          value={search}
          onChange={(value) => setSearch(value)}
          placeholder="Search modules"
        />
        <Select
          options={[
            { label: "Sort by popularity", value: "popularity" },
            { label: "Sort by name", value: "name" }
          ]}
          value={sortBy}
          onChange={(value) => setSortBy(value as string)}
        />
      </div>
      
      {!filteredModules.length ? (
        <section className="cozy">No modules found</section>
      ) : (
        <div className={styles.modulesList}>
          {filteredModules.map((module) => (
            <div key={module.name} className={styles.moduleCard}>
              <div className={styles.moduleHeader}>
                <h3>{module.name}</h3>
                <div className={styles.actions}>
                  <button
                    className={styles.installButton}
                    onClick={() => handleInstallModule(module.name)}
                    title="Install this module"
                  >
                    Install
                  </button>
                  <button
                    className={styles.docsButton}
                    onClick={() => {
                      const url = `https://nf-co.re/modules/${module.name}`;
                      vscode.postMessage({
                        command: "openExternal",
                        url
                      });
                    }}
                    title="View documentation"
                  >
                    Docs
                  </button>
                </div>
              </div>
              
              <p className={styles.description}>{module.meta.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Modules; 