import { Uri, EventEmitter } from "vscode";

import type { UriHandler } from "vscode";

class UriEventHandler extends EventEmitter<Uri> implements UriHandler {
  public handleUri(uri: Uri) {
    this.fire(uri);
  }
}

export default UriEventHandler;
