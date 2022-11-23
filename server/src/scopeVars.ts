export interface NextflowConfigScopeItem {
	id: string;
	type: string;
	token: string;
	full_token: string;
	description: string;
};

export function findToken(tok: String): NextflowConfigScopeItem[] {
	let elems = nf_scope_items.filter((item) => tok === item.full_token.substring(0,tok.length));
	return elems;
}

const nf_scope_items: NextflowConfigScopeItem[] = [{
	"id": "SCOPE_AWS",
	"type": "scope",
	"token": "aws",
	"full_token": "aws",
	"description": ""
}, {
	"id": "SCOPE_AWS_CLIENT",
	"type": "scope",
	"token": "client",
	"full_token": "aws.client",
	"description": ""
}, {
	"id": "AWS_CLIENT_ANONYMOUS",
	"type": "string",
	"token": "anonymous",
	"full_token": "aws.client.anonymous",
	"description": "Allow the access of public S3 buckets without the need to provide AWS credentials. Any service that does not accept unsigned requests will return a service access error."
}, {
	"id": "AWS_CLIENT_S3ACL",
	"type": "string",
	"token": "s3Acl",
	"full_token": "aws.client.s3Acl",
	"description": "Allow the setting of a predefined bucket permissions also known as\u00a0canned ACL. Permitted values are\u00a0Private,\u00a0PublicRead,\u00a0PublicReadWrite,\u00a0AuthenticatedRead,\u00a0LogDeliveryWrite,\u00a0BucketOwnerRead,\u00a0BucketOwnerFullControl\u00a0and\u00a0AwsExecRead. See\u00a0Amazon docs\u00a0for details."
}, {
	"id": "AWS_CLIENT_CONNECTIONTIMEOUT",
	"type": "int",
	"token": "connectionTimeout",
	"full_token": "aws.client.connectionTimeout",
	"description": "The amount of time to wait (in milliseconds) when initially establishing a connection before giving up and timing out."
}, {
	"id": "AWS_CLIENT_ENDPOINT",
	"type": "string",
	"token": "endpoint",
	"full_token": "aws.client.endpoint",
	"description": "The AWS S3 API entry point e.g.\u00a0s3-us-west-1.amazonaws.com."
}, {
	"id": "AWS_CLIENT_MAXCONNECTIONS",
	"type": "int",
	"token": "maxConnections",
	"full_token": "aws.client.maxConnections",
	"description": "The maximum number of allowed open HTTP connections."
}, {
	"id": "AWS_CLIENT_MAXERRORRETRY",
	"type": "int",
	"token": "maxErrorRetry",
	"full_token": "aws.client.maxErrorRetry",
	"description": "The maximum number of retry attempts for failed retryable requests."
}, {
	"id": "AWS_CLIENT_PROTOCOL",
	"type": "\"HTTP\"|\"HTTPS\"",
	"token": "protocol",
	"full_token": "aws.client.protocol",
	"description": "The protocol (i.e. HTTP or HTTPS) to use when connecting to AWS."
}, {
	"id": "AWS_CLIENT_PROXYHOST",
	"type": "string",
	"token": "proxyHost",
	"full_token": "aws.client.proxyHost",
	"description": "The proxy host to connect through."
}, {
	"id": "AWS_CLIENT_PROXYPORT",
	"type": "string",
	"token": "proxyPort",
	"full_token": "aws.client.proxyPort",
	"description": "The port on the proxy host to connect through."
}, {
	"id": "AWS_CLIENT_PROXYUSERNAME",
	"type": "string",
	"token": "proxyUsername",
	"full_token": "aws.client.proxyUsername",
	"description": "The user name to use when connecting through a proxy."
}, {
	"id": "AWS_CLIENT_PROXYPASSWORD",
	"type": "string",
	"token": "proxyPassword",
	"full_token": "aws.client.proxyPassword",
	"description": "The password to use when connecting through a proxy."
}, {
	"id": "AWS_CLIENT_S3PATHSTYLEACCESS",
	"type": "string",
	"token": "s3PathStyleAccess",
	"full_token": "aws.client.s3PathStyleAccess",
	"description": "Enable the use of path-based access model that is used to specify the address of an object in S3-compatible storage systems."
}, {
	"id": "AWS_CLIENT_SIGNEROVERRIDE",
	"type": "string",
	"token": "signerOverride",
	"full_token": "aws.client.signerOverride",
	"description": "The name of the signature algorithm to use for signing requests made by the client."
}, {
	"id": "AWS_CLIENT_SOCKETSENDBUFFERSIZEHINT",
	"type": "string",
	"token": "socketSendBufferSizeHint",
	"full_token": "aws.client.socketSendBufferSizeHint",
	"description": "The Size hint (in bytes) for the low level TCP send buffer."
}, {
	"id": "AWS_CLIENT_SOCKETRECVBUFFERSIZEHINT",
	"type": "string",
	"token": "socketRecvBufferSizeHint",
	"full_token": "aws.client.socketRecvBufferSizeHint",
	"description": "The Size hint (in bytes) for the low level TCP receive buffer."
}, {
	"id": "AWS_CLIENT_SOCKETTIMEOUT",
	"type": "string",
	"token": "socketTimeout",
	"full_token": "aws.client.socketTimeout",
	"description": "The amount of time to wait (in milliseconds) for data to be transferred over an established, open connection before the connection is timed out."
}, {
	"id": "AWS_CLIENT_STORAGEENCRYPTION",
	"type": "\"AES256\"|\"aws:kms\"",
	"token": "storageEncryption",
	"full_token": "aws.client.storageEncryption",
	"description": "The S3 server side encryption to be used when saving objects on S3, either\u00a0AES256\u00a0or\u00a0aws:kms\u00a0values are allowed."
}, {
	"id": "AWS_CLIENT_STORAGEKMSKEYID",
	"type": "string",
	"token": "storageKmsKeyId",
	"full_token": "aws.client.storageKmsKeyId",
	"description": "The AWS KMS key Id to be used to encrypt files stored in the target S3 bucket (requires version\u00a022.05.0-edge\u00a0or later)."
}, {
	"id": "AWS_CLIENT_USERAGENT",
	"type": "string",
	"token": "userAgent",
	"full_token": "aws.client.userAgent",
	"description": "The HTTP user agent header passed with all HTTP requests."
}, {
	"id": "AWS_CLIENT_UPLOADMAXTHREADS",
	"type": "int",
	"token": "uploadMaxThreads",
	"full_token": "aws.client.uploadMaxThreads",
	"description": "The maximum number of threads used for multipart upload."
}, {
	"id": "AWS_CLIENT_UPLOADCHUNKSIZE",
	"type": "size",
	"token": "uploadChunkSize",
	"full_token": "aws.client.uploadChunkSize",
	"description": "The size of a single part in a multipart upload (default:\u00a0100 MB)."
}, {
	"id": "AWS_CLIENT_UPLOADSTORAGECLASS",
	"type": "\"STANDARD\"|\"STANDARD_IA\"|\"ONEZONE_IA\"|\"INTELLIGENT_TIERING\"",
	"token": "uploadStorageClass",
	"full_token": "aws.client.uploadStorageClass",
	"description": "The S3 storage class applied to stored objects, one of [STANDARD,\u00a0STANDARD_IA,\u00a0ONEZONE_IA,\u00a0INTELLIGENT_TIERING] (default:\u00a0STANDARD)."
}, {
	"id": "AWS_CLIENT_UPLOADMAXATTEMPTS",
	"type": "int",
	"token": "uploadMaxAttempts",
	"full_token": "aws.client.uploadMaxAttempts",
	"description": "The maximum number of upload attempts after which a multipart upload returns an error (default:\u00a05)."
}, {
	"id": "AWS_CLIENT_UPLOADRETRYSLEEP",
	"type": "timedelta",
	"token": "uploadRetrySleep",
	"full_token": "aws.client.uploadRetrySleep",
	"description": "The time to wait after a failed upload attempt to retry the part upload (default:\u00a0500ms)."
}, {
	"id": "AWS_ACCESSKEY",
	"type": "string",
	"token": "accessKey",
	"full_token": "aws.accessKey",
	"description": ""
}, {
	"id": "AWS_SECRETKEY",
	"type": "string",
	"token": "secretKey",
	"full_token": "aws.secretKey",
	"description": ""
}, {
	"id": "AWS_REGION",
	"type": "string",
	"token": "region",
	"full_token": "aws.region",
	"description": ""
}, {
	"id": "SCOPE_AWS_BATCH",
	"type": "scope",
	"token": "batch",
	"full_token": "aws.batch",
	"description": ""
}, {
	"id": "AWS_BATCH_CLIPATH",
	"type": "string",
	"token": "cliPath",
	"full_token": "aws.batch.cliPath",
	"description": "The path where the AWS command line tool is installed in the host AMI."
}, {
	"id": "AWS_BATCH_JOBROLE",
	"type": "string",
	"token": "jobRole",
	"full_token": "aws.batch.jobRole",
	"description": "The AWS Job Role ARN that needs to be used to execute the Batch Job."
}, {
	"id": "AWS_BATCH_LOGSGROUP",
	"type": "string",
	"token": "logsGroup",
	"full_token": "aws.batch.logsGroup",
	"description": "The name of the logs group used by Batch Jobs (default:\u00a0/aws/batch, requires\u00a022.09.0-edge\u00a0or later)."
}, {
	"id": "AWS_BATCH_VOLUMES",
	"type": "string",
	"token": "volumes",
	"full_token": "aws.batch.volumes",
	"description": "One or more container mounts. Mounts can be specified as simple e.g.\u00a0/some/path\u00a0or canonical format e.g.\u00a0/host/path:/mount/path[:ro|rw]. Multiple mounts can be specifid separating them with a comma or using a list object."
}, {
	"id": "AWS_BATCH_DELAYBETWEENATTEMPTS",
	"type": "timedelta",
	"token": "delayBetweenAttempts",
	"full_token": "aws.batch.delayBetweenAttempts",
	"description": "Delay between download attempts from S3 (default\u00a010 sec)."
}, {
	"id": "AWS_BATCH_MAXPARALLELTRANSFERS",
	"type": "int",
	"token": "maxParallelTransfers",
	"full_token": "aws.batch.maxParallelTransfers",
	"description": "Max parallel upload/download transfer operations\u00a0per job\u00a0(default:\u00a04)."
}, {
	"id": "AWS_BATCH_MAXTRANSFERATTEMPTS",
	"type": "int",
	"token": "maxTransferAttempts",
	"full_token": "aws.batch.maxTransferAttempts",
	"description": "Max number of downloads attempts from S3 (default:\u00a01)."
}, {
	"id": "AWS_BATCH_MAXSPOTATTEMPTS",
	"type": "int",
	"token": "maxSpotAttempts",
	"full_token": "aws.batch.maxSpotAttempts",
	"description": "Max number of execution attempts of a job interrupted by a EC2 spot reclaim event (default:\u00a05, requires\u00a022.04.0\u00a0or later)"
}, {
	"id": "AWS_BATCH_SHAREIDENTIFIER",
	"type": "string",
	"token": "shareIdentifier",
	"full_token": "aws.batch.shareIdentifier",
	"description": "The share identifier for all tasks when using\u00a0fair-share scheduling for AWS Batch\u00a0(requires\u00a022.09.0-edge\u00a0or later)"
}, {
	"id": "AWS_BATCH_RETRYMODE",
	"type": "string",
	"token": "retryMode",
	"full_token": "aws.batch.retryMode",
	"description": "The retry mode configuration setting, to accommodate rate-limiting on\u00a0AWS services\u00a0(default:\u00a0standard)"
}, {
	"id": "SCOPE_CHARLIECLOUD",
	"type": "scope",
	"token": "charliecloud",
	"full_token": "charliecloud",
	"description": ""
}, {
	"id": "CHARLIECLOUD_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "charliecloud.enabled",
	"description": "Turn this flag to\u00a0true\u00a0to enable Charliecloud execution (default:\u00a0false)."
}, {
	"id": "CHARLIECLOUD_ENVWHITELIST",
	"type": "string",
	"token": "envWhitelist",
	"full_token": "charliecloud.envWhitelist",
	"description": "Comma separated list of environment variable names to be included in the container environment."
}, {
	"id": "CHARLIECLOUD_TEMP",
	"type": "string",
	"token": "temp",
	"full_token": "charliecloud.temp",
	"description": "Mounts a path of your choice as the\u00a0/tmp\u00a0directory in the container. Use the special value\u00a0auto\u00a0to create a temporary directory each time a container is created."
}, {
	"id": "CHARLIECLOUD_RUNOPTIONS",
	"type": "string",
	"token": "runOptions",
	"full_token": "charliecloud.runOptions",
	"description": "This attribute can be used to provide any extra command line options supported by the\u00a0ch-run\u00a0command."
}, {
	"id": "CHARLIECLOUD_CACHEDIR",
	"type": "string",
	"token": "cacheDir",
	"full_token": "charliecloud.cacheDir",
	"description": "The directory where remote Charliecloud images are stored. When using a computing cluster it must be a shared folder accessible to all compute nodes."
}, {
	"id": "CHARLIECLOUD_PULLTIMEOUT",
	"type": "timedelta",
	"token": "pullTimeout",
	"full_token": "charliecloud.pullTimeout",
	"description": "The amount of time the Charliecloud pull can last, exceeding which the process is terminated (default:\u00a020\u00a0min)."
}, {
	"id": "SCOPE_CONDA",
	"type": "scope",
	"token": "conda",
	"full_token": "conda",
	"description": ""
}, {
	"id": "CONDA_CACHEDIR",
	"type": "string",
	"token": "cacheDir",
	"full_token": "conda.cacheDir",
	"description": "Defines the path where Conda environments are stored. When using a compute cluster make sure to provide a shared file system path accessible from all compute nodes."
}, {
	"id": "CONDA_CREATEOPTIONS",
	"type": "string",
	"token": "createOptions",
	"full_token": "conda.createOptions",
	"description": "Defines any extra command line options supported by the\u00a0conda\u00a0create\u00a0command. For details\u00a0Conda documentation."
}, {
	"id": "CONDA_CREATETIMEOUT",
	"type": "timedelta",
	"token": "createTimeout",
	"full_token": "conda.createTimeout",
	"description": "Defines the amount of time the Conda environment creation can last. The creation process is terminated when the timeout is exceeded (default:\u00a020\u00a0min)."
}, {
	"id": "CONDA_USEMAMBA",
	"type": "string",
	"token": "useMamba",
	"full_token": "conda.useMamba",
	"description": "Uses the\u00a0mamba\u00a0binary instead of\u00a0conda\u00a0to create the Conda environments. For details\u00a0Mamba documentation."
}, {
	"id": "CONDA_USEMICROMAMBA",
	"type": "boolean",
	"token": "useMicromamba",
	"full_token": "conda.useMicromamba",
	"description": "uses the\u00a0micromamba\u00a0binary instead of\u00a0conda\u00a0to create the Conda environments (requires version\u00a022.05.0-edge\u00a0or later). For details see\u00a0Micromamba documentation."
}, {
	"id": "SCOPE_DAG",
	"type": "scope",
	"token": "dag",
	"full_token": "dag",
	"description": ""
}, {
	"id": "DAG_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "dag.enabled",
	"description": "When\u00a0true\u00a0turns on the generation of the DAG file (default:\u00a0false)."
}, {
	"id": "DAG_FILE",
	"type": "string",
	"token": "file",
	"full_token": "dag.file",
	"description": "Graph file name (default:\u00a0dag-<timestamp>.dot)."
}, {
	"id": "DAG_OVERWRITE",
	"type": "boolean",
	"token": "overwrite",
	"full_token": "dag.overwrite",
	"description": "When\u00a0true\u00a0overwrites any existing DAG file with the same name."
}, {
	"id": "SCOPE_DOCKER",
	"type": "scope",
	"token": "docker",
	"full_token": "docker",
	"description": ""
}, {
	"id": "DOCKER_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "docker.enabled",
	"description": "Turn this flag to\u00a0true\u00a0to enable Docker execution (default:\u00a0false)."
}, {
	"id": "DOCKER_ENVWHITELIST",
	"type": "string",
	"token": "envWhitelist",
	"full_token": "docker.envWhitelist",
	"description": "Comma separated list of environment variable names to be included in the container environment."
}, {
	"id": "DOCKER_LEGACY",
	"type": "boolean",
	"token": "legacy",
	"full_token": "docker.legacy",
	"description": "Uses command line options removed since version 1.10.x (default:\u00a0false)."
}, {
	"id": "DOCKER_SUDO",
	"type": "boolean",
	"token": "sudo",
	"full_token": "docker.sudo",
	"description": "Executes Docker run command as\u00a0sudo\u00a0(default:\u00a0false)."
}, {
	"id": "DOCKER_TTY",
	"type": "boolean",
	"token": "tty",
	"full_token": "docker.tty",
	"description": "Allocates a pseudo-tty (default:\u00a0false)."
}, {
	"id": "DOCKER_TEMP",
	"type": "string",
	"token": "temp",
	"full_token": "docker.temp",
	"description": "Mounts a path of your choice as the\u00a0/tmp\u00a0directory in the container. Use the special value\u00a0auto\u00a0to create a temporary directory each time a container is created."
}, {
	"id": "DOCKER_REMOVE",
	"type": "boolean",
	"token": "remove",
	"full_token": "docker.remove",
	"description": "Clean-up the container after the execution (default:\u00a0true). For details see:\u00a0https://docs.docker.com/engine/reference/run/#clean-up\u2014rm\u00a0."
}, {
	"id": "DOCKER_RUNOPTIONS",
	"type": "string",
	"token": "runOptions",
	"full_token": "docker.runOptions",
	"description": "This attribute can be used to provide any extra command line options supported by the\u00a0docker\u00a0runcommand. For details see:\u00a0https://docs.docker.com/engine/reference/run/\u00a0."
}, {
	"id": "DOCKER_REGISTRY",
	"type": "string",
	"token": "registry",
	"full_token": "docker.registry",
	"description": "The registry from where Docker images are pulled. It should be only used to specify a private registry server. It should NOT include the protocol prefix i.e.\u00a0http://."
}, {
	"id": "DOCKER_FIXOWNERSHIP",
	"type": "boolean",
	"token": "fixOwnership",
	"full_token": "docker.fixOwnership",
	"description": "Fixes ownership of files created by the docker container."
}, {
	"id": "DOCKER_ENGINEOPTIONS",
	"type": "string",
	"token": "engineOptions",
	"full_token": "docker.engineOptions",
	"description": "This attribute can be used to provide any option supported by the Docker engine i.e.\u00a0docker\u00a0[OPTIONS]."
}, {
	"id": "DOCKER_MOUNTFLAGS",
	"type": "string",
	"token": "mountFlags",
	"full_token": "docker.mountFlags",
	"description": "Add the specified flags to the volume mounts e.g.\u00a0mountFlags = \u2018ro,Z\u2019"
}, {
	"id": "SCOPE_EXECUTOR",
	"type": "scope",
	"token": "executor",
	"full_token": "executor",
	"description": ""
}, {
	"id": "EXECUTOR_NAME",
	"type": "string",
	"token": "name",
	"full_token": "executor.name",
	"description": "The name of the executor to be used (default:\u00a0local)."
}, {
	"id": "EXECUTOR_QUEUESIZE",
	"type": "int",
	"token": "queueSize",
	"full_token": "executor.name.queueSize",
	"description": "The number of tasks the executor will handle in a parallel manner (default:\u00a0100)."
}, {
	"id": "EXECUTOR_SUBMITRATELIMIT",
	"type": "string",
	"token": "submitRateLimit",
	"full_token": "executor.name.queueSize.submitRateLimit",
	"description": "Determines the max rate of job submission per time unit, for example\u00a0'10sec'\u00a0(10 jobs per second) or\u00a0'50/2min'\u00a0(50 jobs every 2 minutes) (default: unlimited)."
}, {
	"id": "EXECUTOR_POLLINTERVAL",
	"type": "string",
	"token": "pollInterval",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval",
	"description": "Determines how often to check for process termination. Default varies for each executor."
}, {
	"id": "EXECUTOR_DUMPINTERVAL",
	"type": "timedelta",
	"token": "dumpInterval",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval",
	"description": "Determines how often to log the executor status (default:\u00a05min)."
}, {
	"id": "EXECUTOR_QUEUESTATINTERVAL",
	"type": "timedelta",
	"token": "queueStatInterval",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval",
	"description": "Determines how often to fetch the queue status from the scheduler (default:\u00a01min). Used only by grid executors."
}, {
	"id": "EXECUTOR_EXITREADTIMEOUT",
	"type": "timedelta",
	"token": "exitReadTimeout",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout",
	"description": "Determines how long to wait before returning an error status when a process is terminated but the\u00a0.exitcode\u00a0file does not exist or is empty (default:\u00a0270sec). Used only by grid executors."
}, {
	"id": "EXECUTOR_KILLBATCHSIZE",
	"type": "int",
	"token": "killBatchSize",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize",
	"description": "Determines the number of jobs that can be killed in a single command execution (default:\u00a0100)."
}, {
	"id": "EXECUTOR_PERJOBMEMLIMIT",
	"type": "string",
	"token": "perJobMemLimit",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize.perJobMemLimit",
	"description": "Specifies Platform LSF\u00a0per-job\u00a0memory limit mode. See\u00a0LSF."
}, {
	"id": "EXECUTOR_PERTASKRESERVE",
	"type": "string",
	"token": "perTaskReserve",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize.perJobMemLimit.perTaskReserve",
	"description": "Specifies Platform LSF\u00a0per-task\u00a0memory reserve mode. See\u00a0LSF."
}, {
	"id": "EXECUTOR_JOBNAME",
	"type": "string",
	"token": "jobName",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize.perJobMemLimit.perTaskReserve.jobName",
	"description": "Determines the name of jobs submitted to the underlying cluster executor e.g.\u00a0executor.jobName\u00a0=\u00a0{\u00a0\"$task.name\u00a0-\u00a0$task.hash\"}. Make sure the resulting job name matches the validation constraints of the underlying batch scheduler."
}, {
	"id": "EXECUTOR_CPUS",
	"type": "int",
	"token": "cpus",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize.perJobMemLimit.perTaskReserve.jobName.cpus",
	"description": "The maximum number of CPUs made available by the underlying system. Used only by the\u00a0local\u00a0executor."
}, {
	"id": "EXECUTOR_MEMORY",
	"type": "int",
	"token": "memory",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize.perJobMemLimit.perTaskReserve.jobName.cpus.memory",
	"description": "The maximum amount of memory made available by the underlying system. Used only by the\u00a0local\u00a0executor."
}, {
	"id": "EXECUTOR_RETRYDELAY",
	"type": "timedelta",
	"token": "retry.delay",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize.perJobMemLimit.perTaskReserve.jobName.cpus.memory.retry.delay",
	"description": "Delay when retrying failed job submissions (default:\u00a0500ms). NOTE: used only by grid executors (requires\u00a022.03.0-edge\u00a0or later)."
}, {
	"id": "EXECUTOR_RETRYMAXDELAY",
	"type": "timedelta",
	"token": "retry.maxDelay",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize.perJobMemLimit.perTaskReserve.jobName.cpus.memory.retry.delay.retry.maxDelay",
	"description": "Max delay when retrying failed job submissions (default:\u00a030s). NOTE: used only by grid executors (requires\u00a022.03.0-edge\u00a0or later)."
}, {
	"id": "EXECUTOR_RETRYJITTER",
	"type": "float",
	"token": "retry.jitter",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize.perJobMemLimit.perTaskReserve.jobName.cpus.memory.retry.delay.retry.maxDelay.retry.jitter",
	"description": "Jitter value when retrying failed job submissions (default:\u00a00.25). NOTE: used only by grid executors (requires\u00a022.03.0-edge\u00a0or later)."
}, {
	"id": "EXECUTOR_RETRYMAXATTEMPTS",
	"type": "int",
	"token": "retry.maxAttempts",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize.perJobMemLimit.perTaskReserve.jobName.cpus.memory.retry.delay.retry.maxDelay.retry.jitter.retry.maxAttempts",
	"description": "Max attempts when retrying failed job submissions (default:\u00a03). NOTE: used only by grid executors (requires\u00a022.03.0-edge\u00a0or later)."
}, {
	"id": "EXECUTOR_RETRYREASON",
	"type": "string",
	"token": "retry.reason",
	"full_token": "executor.name.queueSize.submitRateLimit.pollInterval.dumpInterval.queueStatInterval.exitReadTimeout.killBatchSize.perJobMemLimit.perTaskReserve.jobName.cpus.memory.retry.delay.retry.maxDelay.retry.jitter.retry.maxAttempts.retry.reason",
	"description": "Regex pattern that when verified cause a failed submit operation to be re-tried (default:\u00a0Socket\u00a0timedout). NOTE: used only by grid executors (requires\u00a022.03.0-edge\u00a0or later)."
}, {
	"id": "SCOPE_K8S",
	"type": "scope",
	"token": "k8s",
	"full_token": "k8s",
	"description": ""
}, {
	"id": "K8S_AUTOMOUNTHOSTPATHS",
	"type": "boolean",
	"token": "autoMountHostPaths",
	"full_token": "k8s.autoMountHostPaths",
	"description": "Automatically mounts host paths in the job pods. Only for development purpose when using a single node cluster (default:\u00a0false)."
}, {
	"id": "K8S_CONTEXT",
	"type": "string",
	"token": "context",
	"full_token": "k8s.context",
	"description": "Defines the Kubernetes\u00a0configuration context name\u00a0to use."
}, {
	"id": "K8S_NAMESPACE",
	"type": "string",
	"token": "namespace",
	"full_token": "k8s.namespace",
	"description": "Defines the Kubernetes namespace to use (default:\u00a0default)."
}, {
	"id": "K8S_SERVICEACCOUNT",
	"type": "string",
	"token": "serviceAccount",
	"full_token": "k8s.serviceAccount",
	"description": "Defines the Kubernetes\u00a0service account name\u00a0to use."
}, {
	"id": "K8S_LAUNCHDIR",
	"type": "string",
	"token": "launchDir",
	"full_token": "k8s.launchDir",
	"description": "Defines the path where the workflow is launched and the user data is stored. This must be a path in a shared K8s persistent volume (default:\u00a0<volume-claim-mount-path>/<user-name>."
}, {
	"id": "K8S_WORKDIR",
	"type": "string",
	"token": "workDir",
	"full_token": "k8s.workDir",
	"description": "Defines the path where the workflow temporary data is stored. This must be a path in a shared K8s persistent volume (default:<user-dir>/work)."
}, {
	"id": "K8S_PROJECTDIR",
	"type": "string",
	"token": "projectDir",
	"full_token": "k8s.projectDir",
	"description": "Defines the path where Nextflow projects are downloaded. This must be a path in a shared K8s persistent volume (default:\u00a0<volume-claim-mount-path>/projects)."
}, {
	"id": "K8S_POD",
	"type": "string",
	"token": "pod",
	"full_token": "k8s.pod",
	"description": "Allows the definition of one or more pod configuration options such as environment variables, config maps, secrets, etc. It allows the same settings as the\u00a0pod\u00a0process directive."
}, {
	"id": "K8S_PULLPOLICY",
	"type": "string",
	"token": "pullPolicy",
	"full_token": "k8s.pullPolicy",
	"description": "Defines the strategy to be used to pull the container image e.g.\u00a0pullPolicy:\u00a0'Always'."
}, {
	"id": "K8S_RUNASUSER",
	"type": "string",
	"token": "runAsUser",
	"full_token": "k8s.runAsUser",
	"description": "Defines the user ID to be used to run the containers. Shortcut for the\u00a0securityContext\u00a0option."
}, {
	"id": "K8S_SECURITYCONTEXT",
	"type": "string",
	"token": "securityContext",
	"full_token": "k8s.securityContext",
	"description": "Defines the\u00a0security context\u00a0for all pods."
}, {
	"id": "K8S_STORAGECLAIMNAME",
	"type": "string",
	"token": "storageClaimName",
	"full_token": "k8s.storageClaimName",
	"description": "The name of the persistent volume claim where store workflow result data."
}, {
	"id": "K8S_STORAGEMOUNTPATH",
	"type": "string",
	"token": "storageMountPath",
	"full_token": "k8s.storageMountPath",
	"description": "The path location used to mount the persistent volume claim (default:\u00a0/workspace)."
}, {
	"id": "K8S_STORAGESUBPATH",
	"type": "string",
	"token": "storageSubPath",
	"full_token": "k8s.storageSubPath",
	"description": "The path in the persistent volume to be mounted (default: root)."
}, {
	"id": "K8S_COMPUTERESOURCETYPE",
	"type": "\"Pod\"|\"Job\"",
	"token": "computeResourceType",
	"full_token": "k8s.computeResourceType",
	"description": "Define whether use Kubernetes\u00a0Pod\u00a0or\u00a0Job\u00a0resource type to carry out Nextflow tasks (default:\u00a0Pod)."
}, {
	"id": "K8S_FETCHNODENAME",
	"type": "boolean",
	"token": "fetchNodeName",
	"full_token": "k8s.fetchNodeName",
	"description": "If you trace the hostname, activate this option (default:\u00a0false, requires version\u00a022.05.0-edge\u00a0or later)."
}, {
	"id": "K8S_VOLUMECLAIMS",
	"type": "string",
	"token": "volumeClaims",
	"full_token": "k8s.volumeClaims",
	"description": "(deprecated)"
}, {
	"id": "K8S_MAXERRORRETRY",
	"type": "int",
	"token": "maxErrorRetry",
	"full_token": "k8s.maxErrorRetry",
	"description": "Defines the Kubernetes API max request retries (default is set to 4)"
}, {
	"id": "K8S_HTTPREADTIMEOUT",
	"type": "timedelta",
	"token": "httpReadTimeout",
	"full_token": "k8s.httpReadTimeout",
	"description": "Defines the Kubernetes client request HTTP connection read timeout e.g.\u00a0'60s'\u00a0(requires version\u00a022.10.0\u00a0or later)."
}, {
	"id": "K8S_HTTPCONNECTTIMEOUT",
	"type": "timedelta",
	"token": "httpConnectTimeout",
	"full_token": "k8s.httpConnectTimeout",
	"description": "Defines the Kubernetes client request HTTP connection timeout e.g.\u00a0'60s'\u00a0(requires version\u00a022.10.0\u00a0or later)."
}, {
	"id": "SCOPE_MAIL",
	"type": "scope",
	"token": "mail",
	"full_token": "mail",
	"description": ""
}, {
	"id": "MAIL_FROM",
	"type": "string",
	"token": "from",
	"full_token": "mail.from",
	"description": "Default email sender address."
}, {
	"id": "MAIL_SMTPHOST",
	"type": "string",
	"token": "smtp.host",
	"full_token": "mail.smtp.host",
	"description": "Host name of the mail server."
}, {
	"id": "MAIL_SMTPPORT",
	"type": "int",
	"token": "smtp.port",
	"full_token": "mail.smtp.port",
	"description": "Port number of the mail server."
}, {
	"id": "MAIL_SMTPUSER",
	"type": "string",
	"token": "smtp.user",
	"full_token": "mail.smtp.user",
	"description": "User name to connect to the mail server."
}, {
	"id": "MAIL_SMTPPASSWORD",
	"type": "string",
	"token": "smtp.password",
	"full_token": "mail.smtp.password",
	"description": "User password to connect to the mail server."
}, {
	"id": "MAIL_SMTPPROXYHOST",
	"type": "string",
	"token": "smtp.proxy.host",
	"full_token": "mail.smtp.proxy.host",
	"description": "Host name of an HTTP web proxy server that will be used for connections to the mail server."
}, {
	"id": "MAIL_SMTPPROXYPORT",
	"type": "int",
	"token": "smtp.proxy.port",
	"full_token": "mail.smtp.proxy.port",
	"description": "Port number for the HTTP web proxy server."
}, {
	"id": "MAIL_DEBUG",
	"type": "boolean",
	"token": "debug",
	"full_token": "mail.debug",
	"description": "When\u00a0true\u00a0enables Java Mail logging for debugging purpose."
}, {
	"id": "SCOPE_MANIFEST",
	"type": "scope",
	"token": "manifest",
	"full_token": "manifest",
	"description": ""
}, {
	"id": "MANIFEST_AUTHOR",
	"type": "string",
	"token": "author",
	"full_token": "manifest.author",
	"description": "Project author name (use a comma to separate multiple names)."
}, {
	"id": "MANIFEST_DEFAULTBRANCH",
	"type": "string",
	"token": "defaultBranch",
	"full_token": "manifest.defaultBranch",
	"description": "Git repository default branch (default:\u00a0master)."
}, {
	"id": "MANIFEST_RECURSESUBMODULES",
	"type": "boolean",
	"token": "recurseSubmodules",
	"full_token": "manifest.recurseSubmodules",
	"description": "Turn this flag to\u00a0true\u00a0to pull submodules recursively from the Git repository"
}, {
	"id": "MANIFEST_DESCRIPTION",
	"type": "string",
	"token": "description",
	"full_token": "manifest.description",
	"description": "Free text describing the workflow project."
}, {
	"id": "MANIFEST_DOI",
	"type": "string",
	"token": "doi",
	"full_token": "manifest.doi",
	"description": "Project related publication DOI identifier."
}, {
	"id": "MANIFEST_HOMEPAGE",
	"type": "string",
	"token": "homePage",
	"full_token": "manifest.homePage",
	"description": "Project home page URL."
}, {
	"id": "MANIFEST_MAINSCRIPT",
	"type": "string",
	"token": "mainScript",
	"full_token": "manifest.mainScript",
	"description": "Project main script (default:\u00a0main.nf)."
}, {
	"id": "MANIFEST_NAME",
	"type": "string",
	"token": "name",
	"full_token": "manifest.name",
	"description": "Project short name."
}, {
	"id": "MANIFEST_NEXTFLOWVERSION",
	"type": "string",
	"token": "nextflowVersion",
	"full_token": "manifest.nextflowVersion",
	"description": "Minimum required Nextflow version."
}, {
	"id": "MANIFEST_VERSION",
	"type": "string",
	"token": "version",
	"full_token": "manifest.version",
	"description": "Project version number."
}, {
	"id": "SCOPE_NOTIFICATION",
	"type": "scope",
	"token": "notification",
	"full_token": "notification",
	"description": ""
}, {
	"id": "NOTIFICATION_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "notification.enabled",
	"description": "Enables the sending of a notification message when the workflow execution completes."
}, {
	"id": "NOTIFICATION_TO",
	"type": "string",
	"token": "to",
	"full_token": "notification.to",
	"description": "Recipient address for the notification email. Multiple addresses can be specified separating them with a comma."
}, {
	"id": "NOTIFICATION_FROM",
	"type": "string",
	"token": "from",
	"full_token": "notification.from",
	"description": "Sender address for the notification email message."
}, {
	"id": "NOTIFICATION_TEMPLATE",
	"type": "string",
	"token": "template",
	"full_token": "notification.template",
	"description": "Path of a template file which provides the content of the notification message."
}, {
	"id": "NOTIFICATION_BINDING",
	"type": "string",
	"token": "binding",
	"full_token": "notification.binding",
	"description": "An associative array modelling the variables in the template file."
}, {
	"id": "SCOPE_PODMAN",
	"type": "scope",
	"token": "podman",
	"full_token": "podman",
	"description": ""
}, {
	"id": "PODMAN_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "podman.enabled",
	"description": "Turn this flag to\u00a0true\u00a0to enable Podman execution (default:\u00a0false)."
}, {
	"id": "PODMAN_ENVWHITELIST",
	"type": "string",
	"token": "envWhitelist",
	"full_token": "podman.envWhitelist",
	"description": "Comma separated list of environment variable names to be included in the container environment."
}, {
	"id": "PODMAN_TEMP",
	"type": "string",
	"token": "temp",
	"full_token": "podman.temp",
	"description": "Mounts a path of your choice as the\u00a0/tmp\u00a0directory in the container. Use the special value\u00a0auto\u00a0to create a temporary directory each time a container is created."
}, {
	"id": "PODMAN_REMOVE",
	"type": "boolean",
	"token": "remove",
	"full_token": "podman.remove",
	"description": "Clean-up the container after the execution (default:\u00a0true)."
}, {
	"id": "PODMAN_RUNOPTIONS",
	"type": "string",
	"token": "runOptions",
	"full_token": "podman.runOptions",
	"description": "This attribute can be used to provide any extra command line options supported by the\u00a0podman\u00a0run\u00a0command."
}, {
	"id": "PODMAN_REGISTRY",
	"type": "string",
	"token": "registry",
	"full_token": "podman.registry",
	"description": "The registry from where container images are pulled. It should be only used to specify a private registry server. It should NOT include the protocol prefix i.e.\u00a0http://."
}, {
	"id": "PODMAN_ENGINEOPTIONS",
	"type": "string",
	"token": "engineOptions",
	"full_token": "podman.engineOptions",
	"description": "This attribute can be used to provide any option supported by the Docker engine i.e.\u00a0podman\u00a0[OPTIONS]."
}, {
	"id": "PODMAN_MOUNTFLAGS",
	"type": "string",
	"token": "mountFlags",
	"full_token": "podman.mountFlags",
	"description": "Add the specified flags to the volume mounts e.g.\u00a0mountFlags = \u2018ro,Z\u2019"
}, {
	"id": "SCOPE_REPORT",
	"type": "scope",
	"token": "report",
	"full_token": "report",
	"description": ""
}, {
	"id": "REPORT_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "report.enabled",
	"description": "If\u00a0true\u00a0it create the workflow execution report."
}, {
	"id": "REPORT_FILE",
	"type": "string",
	"token": "file",
	"full_token": "report.file",
	"description": "The path of the created execution report file (default:\u00a0report-<timestamp>.html)."
}, {
	"id": "REPORT_OVERWRITE",
	"type": "boolean",
	"token": "overwrite",
	"full_token": "report.overwrite",
	"description": "When\u00a0true\u00a0overwrites any existing report file with the same name."
}, {
	"id": "SCOPE_SHIFTER",
	"type": "scope",
	"token": "shifter",
	"full_token": "shifter",
	"description": ""
}, {
	"id": "SHIFTER_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "shifter.enabled",
	"description": "Turn this flag to\u00a0true\u00a0to enable Shifter execution (default:\u00a0false)."
}, {
	"id": "SCOPE_SINGULARITY",
	"type": "scope",
	"token": "singularity",
	"full_token": "singularity",
	"description": ""
}, {
	"id": "SINGULARITY_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "singularity.enabled",
	"description": "Turn this flag to\u00a0true\u00a0to enable Singularity execution (default:\u00a0false)."
}, {
	"id": "SINGULARITY_ENGINEOPTIONS",
	"type": "string",
	"token": "engineOptions",
	"full_token": "singularity.engineOptions",
	"description": "This attribute can be used to provide any option supported by the Singularity engine i.e.\u00a0singularity\u00a0[OPTIONS]."
}, {
	"id": "SINGULARITY_ENVWHITELIST",
	"type": "string",
	"token": "envWhitelist",
	"full_token": "singularity.envWhitelist",
	"description": "Comma separated list of environment variable names to be included in the container environment."
}, {
	"id": "SINGULARITY_RUNOPTIONS",
	"type": "string",
	"token": "runOptions",
	"full_token": "singularity.runOptions",
	"description": "This attribute can be used to provide any extra command line options supported by the\u00a0singularity\u00a0exec."
}, {
	"id": "SINGULARITY_NOHTTPS",
	"type": "boolean",
	"token": "noHttps",
	"full_token": "singularity.noHttps",
	"description": "Turn this flag to\u00a0true\u00a0to pull the Singularity image with http protocol (default:\u00a0false)."
}, {
	"id": "SINGULARITY_AUTOMOUNTS",
	"type": "boolean",
	"token": "autoMounts",
	"full_token": "singularity.autoMounts",
	"description": "When\u00a0true\u00a0Nextflow automatically mounts host paths in the executed container. It requires the\u00a0user bind control\u00a0feature enabled in your Singularity installation (default:\u00a0false)."
}, {
	"id": "SINGULARITY_CACHEDIR",
	"type": "string",
	"token": "cacheDir",
	"full_token": "singularity.cacheDir",
	"description": "The directory where remote Singularity images are stored. When using a computing cluster it must be a shared folder accessible to all compute nodes."
}, {
	"id": "SINGULARITY_PULLTIMEOUT",
	"type": "timedelta",
	"token": "pullTimeout",
	"full_token": "singularity.pullTimeout",
	"description": "The amount of time the Singularity pull can last, exceeding which the process is terminated (default:\u00a020\u00a0min)."
}, {
	"id": "SCOPE_TIMELINE",
	"type": "scope",
	"token": "timeline",
	"full_token": "timeline",
	"description": ""
}, {
	"id": "TIMELINE_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "timeline.enabled",
	"description": "When\u00a0true\u00a0turns on the generation of the timeline report file (default:\u00a0false)."
}, {
	"id": "TIMELINE_FILE",
	"type": "string",
	"token": "file",
	"full_token": "timeline.file",
	"description": "Timeline file name (default:\u00a0timeline-<timestamp>.html)."
}, {
	"id": "TIMELINE_OVERWRITE",
	"type": "boolean",
	"token": "overwrite",
	"full_token": "timeline.overwrite",
	"description": "When\u00a0true\u00a0overwrites any existing timeline file with the same name."
}, {
	"id": "SCOPE_TOWER",
	"type": "scope",
	"token": "tower",
	"full_token": "tower",
	"description": ""
}, {
	"id": "TOWER_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "tower.enabled",
	"description": "When\u00a0true\u00a0Nextflow sends the workflow tracing and execution metrics to the Nextflow Tower service (default:\u00a0false)."
}, {
	"id": "TOWER_ACCESSTOKEN",
	"type": "string",
	"token": "accessToken",
	"full_token": "tower.accessToken",
	"description": "The unique access token specific to your account on an instance of Tower."
}, {
	"id": "TOWER_ENDPOINT",
	"type": "string",
	"token": "endpoint",
	"full_token": "tower.endpoint",
	"description": "The endpoint of your Tower deployment (default:\u00a0https://tower.nf)."
}, {
	"id": "TOWER_WORKSPACEID",
	"type": "string",
	"token": "workspaceId",
	"full_token": "tower.workspaceId",
	"description": "The ID of the Tower workspace where the run should be added (default: the launching user personal workspace)."
}, {
	"id": "SCOPE_TRACE",
	"type": "scope",
	"token": "trace",
	"full_token": "trace",
	"description": ""
}, {
	"id": "TRACE_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "trace.enabled",
	"description": "When\u00a0true\u00a0turns on the generation of the execution trace report file (default:\u00a0false)."
}, {
	"id": "TRACE_FIELDS",
	"type": "string",
	"token": "fields",
	"full_token": "trace.fields",
	"description": "Comma separated list of fields to be included in the report. The available fields are listed at\u00a0this page"
}, {
	"id": "TRACE_FILE",
	"type": "string",
	"token": "file",
	"full_token": "trace.file",
	"description": "Trace file name (default:\u00a0trace-<timestamp>.txt)."
}, {
	"id": "TRACE_SEP",
	"type": "string",
	"token": "sep",
	"full_token": "trace.sep",
	"description": "Character used to separate values in each row (default:\u00a0\\t)."
}, {
	"id": "TRACE_RAW",
	"type": "boolean",
	"token": "raw",
	"full_token": "trace.raw",
	"description": "When\u00a0true\u00a0turns on raw number report generation i.e. date and time are reported as milliseconds and memory as number of bytes"
}, {
	"id": "TRACE_OVERWRITE",
	"type": "boolean",
	"token": "overwrite",
	"full_token": "trace.overwrite",
	"description": "When\u00a0true\u00a0overwrites any existing trace file with the same name."
}, {
	"id": "SCOPE_WEBLOG",
	"type": "scope",
	"token": "weblog",
	"full_token": "weblog",
	"description": ""
}, {
	"id": "WEBLOG_ENABLED",
	"type": "boolean",
	"token": "enabled",
	"full_token": "weblog.enabled",
	"description": "If\u00a0true\u00a0it will send HTTP POST requests to a given url."
}, {
	"id": "WEBLOG_URL",
	"type": "string",
	"token": "url",
	"full_token": "weblog.url",
	"description": "The url where to send HTTP POST requests (default:\u00a0http:localhost)."
}];