// HTTP: https://github.com/prettymuchbryce/http-status-codes/blob/master/README.md#codes
// FFmpeg: https://github.com/FFmpeg/FFmpeg/blob/636631d9db82f5e86330ab42dacc8a106684b349/libavutil/error.c
// Linux: https://www.man7.org/linux/man-pages/man3/errno.3.html

module.exports = {
	HTTP_BAD_REQUEST: 'HTTP 400 Bad Request',
	HTTP_UNAUTHORIZED: 'HTTP 401 Unauthorized',
	HTTP_PAYMENT_REQUIRED: 'HTTP 402 Payment Required',
	HTTP_FORBIDDEN: 'HTTP 403 Forbidden',
	HTTP_NOT_FOUND: 'HTTP 404 Not Found',
	HTTP_METHOD_NOT_ALLOWED: 'HTTP 405 Method Not Allowed',
	HTTP_NOT_ACCEPTABLE: 'HTTP 406 Not Acceptable',
	HTTP_PROXY_AUTHENTICATION_REQUIRED: 'HTTP 407 Proxy Authentication Required',
	HTTP_REQUEST_TIMEOUT: 'HTTP 408 Request Timeout',
	HTTP_CONFLICT: 'HTTP 409 Conflict',
	HTTP_GONE: 'HTTP 410 Gone',
	HTTP_LENGTH_REQUIRED: 'HTTP 411 Length Required',
	HTTP_PRECONDITION_FAILED: 'HTTP 412 Precondition Failed',
	HTTP_REQUEST_TOO_LONG: 'HTTP 413 Request Entity Too Large',
	HTTP_REQUEST_URI_TOO_LONG: 'HTTP 414 Request-URI Too Long',
	HTTP_UNSUPPORTED_MEDIA_TYPE: 'HTTP 415 Unsupported Media Type',
	HTTP_REQUESTED_RANGE_NOT_SATISFIABLE:
		'HTTP 416 Requested Range Not Satisfiable',
	HTTP_EXPECTATION_FAILED: 'HTTP 417 Expectation Failed',
	HTTP_IM_A_TEAPOT: "HTTP 418 I'm a teapot",
	HTTP_INSUFFICIENT_SPACE_ON_RESOURCE:
		'HTTP 419 Insufficient Space on Resource',
	HTTP_METHOD_FAILURE: 'HTTP 420 Method Failure',
	HTTP_MISDIRECTED_REQUEST: 'HTTP 421 Misdirected Request',
	HTTP_UNPROCESSABLE_ENTITY: 'HTTP 422 Unprocessable Entity',
	HTTP_LOCKED: 'HTTP 423 Locked',
	HTTP_FAILED_DEPENDENCY: 'HTTP 424 Failed Dependency',
	HTTP_PRECONDITION_REQUIRED: 'HTTP 428 Precondition Required',
	HTTP_TOO_MANY_REQUESTS: 'HTTP 429 Too Many Requests',
	HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE:
		'HTTP 431 Request Header Fields Too Large',
	HTTP_UNAVAILABLE_FOR_LEGAL_REASONS: 'HTTP 451 Unavailable For Legal Reasons',
	HTTP_INTERNAL_SERVER_ERROR: 'HTTP 500 Internal Server Error',
	HTTP_NOT_IMPLEMENTED: 'HTTP 501 Not Implemented',
	HTTP_BAD_GATEWAY: 'HTTP 502 Bad Gateway',
	HTTP_SERVICE_UNAVAILABLE: 'HTTP 503 Service Unavailable',
	HTTP_GATEWAY_TIMEOUT: 'HTTP 504 Gateway Timeout',
	HTTP_HTTP_VERSION_NOT_SUPPORTED: 'HTTP 505 HTTP Version Not Supported',
	HTTP_INSUFFICIENT_STORAGE: 'HTTP 507 Insufficient Storage',
	HTTP_NETWORK_AUTHENTICATION_REQUIRED:
		'HTTP 511 Network Authentication Required',

	SYSTEM_PROTOCOL_ERROR: 'SYSTEM Protocol Error',
	SYSTEM_PARSE_ERROR: 'SYSTEM Parse Error',
	SYSTEM_NETWORK_UNREACHABLE: 'SYSTEM Network Unreachable',
	SYSTEM_ECONNRESET: 'SYSTEM Connection Reset',
	SYSTEM_UNDEFINED: 'SYSTEM Undefined Error',

	FFMPEG_INPUT_OUTPUT_ERROR: 'FFMPEG Input/output Error',
	FFMPEG_PROTOCOL_NOT_FOUND: 'FFMPEG Protocol Not Found',
	FFMPEG_INVALID_DATA: 'FFMPEG Invalid Data',
	FFMPEG_PROCESS_TIMEOUT: 'FFMPEG Process Timeout',
	FFMPEG_UNDEFINED: 'FFMPEG Undefined Error',
	FFMPEG_STREAMS_NOT_FOUND: 'Streams Not Found',
}
