# ***What are HTTP headers?***

- HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.

- Metadata is sent in the form of header which is used to pass additional information about the request or response. 

- ***Metadata*** is nothing but the additional information about the data that is sent in the form of key-value pairs along with the request or response.

- ***HTTP headers*** are used for caching, authentication, identification, managing state etc.

  ### *Types of HTTP headers* 

  - **Request Headers** - These headers are used to provide additional information about the request. Some of the request headers are Accept, Accept-Encoding, Accept-Language, Cache-Control, Connection, Host, User-Agent etc. Thet come from the client to the server.

  - **Response Headers** - These headers are used to provide additional information about the response. Some of the response headers are Access-Control-Allow-Origin, Access-Control-Expose-Headers, Age, Cache-Control, Content-Encoding, Content-Length, Content-Type, Date, ETag, Expires, Last-Modified, Server, Set-Cookie, Vary etc. They come from the server to the client.

  - **Representation Headers** - These headers are used to provide additional information about the body of the entity. Some of the representation headers are Content-Type, Content-Length, Content-Language, Content-Encoding, Content-Location, Content-MD5, Content-Range, Content-Disposition, Expires, Last-Modified etc.

  - **Payload Headers** - These headers are used to provide additional information about the payload of the entity. Some of the payload headers are Content-Length, Content-Type, Content-Encoding, Content-Language, Content-Range, Content-Disposition etc.

  ### *Most Common Headers*

  - **Accept** - It is used to specify the media types that are acceptable for the response. It is used in the request.

  - **User-Agent** - It is used to specify the user agent information. It is used in the request.

  - **Content-Type** - It is used to specify the media type of the resource. It is used in the request and response.

  - **Content-Length** - It is used to specify the size of the resource. It is used in the request and response.

  - **Cache-Control** - It is used to specify the directives for caching mechanisms in both requests and responses. It is used in the request and response.

  - **Authentication** - It is used to specify the authentication information of a user agent for an HTTP origin server. It is used in the request.

  - **Cookie** - It is used to send the cookie data to the server. It is used in the request.

  - **Set-Cookie** - It is used to send the cookie data from the server to the user agent. It is used in the response.

  ### *CORS*

  - CORS stands for Cross-Origin Resource Sharing. It is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.

  - **Access-Control-Allow-Origin** - It is used to specify the origins that are allowed to see the resource. It is used in the response.

  - **Access-Control-Allow-Credentials** - It is used to specify whether the response to request can be exposed when the omit credentials flag is unset. It is used in the response.

  - **Access-Control-Expose-Headers** - It is used to specify the headers that are allowed to be exposed to the author request. It is used in the response.

  - **Access-Control-Max-Age** - It is used to specify the time in seconds that preflight request can be cached. It is used in the response.

  - **Access-Control-Allow-Methods** - It is used to specify the methods that are allowed when accessing the resource. It is used in the response.

  ### *Security*

  - **Strict-Transport-Security** - It is used to specify the policy that is used by a web server to inform the browser that the web server must communicate with it using only HTTPS connections. It is used in the response.

  - **X-Frame-Options** - It is used to indicate whether or not a browser should be allowed to render a page in a frame, iframe or object. It is used in the response.

  - **X-XSS-Protection** - It is used to enable the cross-site scripting (XSS) filter in the browser. It is used in the response.

  - **X-Content-Type-Options** - It is used to prevent the browser from MIME-sniffing a response away from the declared content-type. It is used in the response.

  - **Content-Security-Policy** - It is used to specify the content security policy in the response header. It is used in the response.

  - **Referrer-Policy** - It is used to specify the referrer policy in the response header. It is used in the response.

  - **Cross-Origin-Embedder-Policy** - It is used to specify the cross-origin embedder policy in the response header. It is used in the response.

  - **Cross-Origin-Opener-Policy** - It is used to specify the cross-origin opener policy in the response header. It is used in the response.

# ***HTTP Methods***

- **GET** - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

- **HEAD** - The HEAD method asks for a response identical to that of a GET request, but without the response body.

- **POST** - The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

- **PUT** - The PUT method replaces all current representations of the target resource with the request payload.

- **DELETE** - The DELETE method deletes the specified resource.

- **CONNECT** - The CONNECT method establishes a tunnel to the server identified by the target resource.

- **OPTIONS** - The OPTIONS method is used to describe the communication options for the target resource.

- **TRACE** - The TRACE method performs a message loop-back test along the path to the target resource.

- **PATCH** - The PATCH method is used to apply partial modifications to a resource.

# ***HTTP Status Codes***

- **1xx** - Informational responses

- **2xx** - Successful responses

- **3xx** - Redirects

- **4xx** - Client errors

- **5xx** - Server errors

  ### ***Some Common Ones Are***

  - **100 Continue**
  - **102 Processing**
  - **200 OK**
  - **201 Created**
  - **202 Accepted**
  - **204 No Content**
  - **206 Partial Content**
  - **301 Moved Permanently**
  - **302 Found**
  - **307 Temporary Redirect**
  - **308 Permanent Redirect**
  - **400 Bad Request**
  - **401 Unauthorized**
  - **403 Forbidden**
  - **404 Not Found**
  - **405 Method Not Allowed**
  - **408 Request Timeout**
  - **418 I'm a teapot**
  - **429 Too Many Requests**
  - **500 Internal Server Error**
  - **501 Not Implemented**
  - **502 Bad Gateway**
  - **503 Service Unavailable**
  - **504 Gateway Timeout**

# ***HTTP Cookies***

- A cookie is a small piece of data that a server sends to the user's web browser. The browser may store it and send it back with the next request to the same server. Typically, it's used to tell if two requests came from the same browser — keeping a user logged-in, for example. It remembers stateful information for the stateless HTTP protocol.

- Cookies are mainly used for three purposes:

  - **Session management** - Logins, shopping carts, game scores, or anything else the server should remember

  - **Personalization** - User preferences, themes, and other settings

  - **Tracking** - Recording and analyzing user behavior

- **Session cookies** - These are deleted when the user closes their browser. If your site has a log-in mechanism, use this for your user's session ID.

- **Permanent cookies** - These are not deleted when the user closes their browser, and typically have an expiration date. They are used for things like remembering usernames, site preferences, or anything else that the website will want to remember later on.

- **Secure cookies** - These are only sent over encrypted connections. This makes the cookie less likely to be exposed to cookie theft via eavesdropping.

- **HttpOnly cookies** - These are not accessible via JavaScript. This restriction eliminates the threat of cookie theft via cross-site scripting (XSS). However, the cookie remains vulnerable to cross-site tracing (XST) and cross-site request forgery (XSRF) attacks.

- **SameSite cookies** - These are not sent on cross-site requests. This restriction eliminates the threat of cross-site request forgery (XSRF) attacks.

- **Third-party cookies** - These are cookies set with a domain that is different from the domain of the currently opened page. They are used for cross-site tracking, retargeting, and ad-serving.

- **Supercookies** - These are cookies stored in multiple locations. They are used for persistent identification of users.

- **Zombie cookies** - These are cookies recreated after deletion. They are used for re-identification of users after cookie deletion.

- **Local Shared Objects** - These are locally stored Flash objects, including shared objects (aka Flash cookies), Flash cache, Flash-based cookies, and the Local Shared Object container.

- **Flash cookies** - These are locally stored Flash objects, including shared objects (aka Local Shared Objects), Flash cache, Flash-based cookies, and the Local Shared Object container.

- **Silverlight cookies** - These are locally stored Silverlight objects, including isolated storage and the Silverlight application storage.

- **HTML5 storage** - These are locally stored objects, including HTML5 local storage, HTML5 session storage, and HTML5 database storage.

- **Cache cookies** - These are locally stored cache files, including images, audio/video, and full web pages.

- **Authentication cookies** - These are used to determine whether a user is logged in or not, and what account they are logged in with.

- **Security cookies** - These are used for security breaches and to protect user data from unauthorized parties.

- **Browser cookies** - These are used to store user preferences such as language, font size, page layout, etc.

- **Tracking cookies** - These are used to track user behavior over time and across multiple websites.

- **Third-party tracking cookies** - These are used to track user behavior across multiple websites.

- **Persistent cookies** - These are used to track user behavior over multiple sessions.

