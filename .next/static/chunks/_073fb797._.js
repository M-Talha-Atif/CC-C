(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/utils/axiosInstance.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:3001/"),
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});
let isRefreshing = false;
let failedQueue = [];
const processQueue = (error, token = null)=>{
    failedQueue.forEach((prom)=>{
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};
// Response interceptor
axiosInstance.interceptors.response.use((response)=>response, async (error)=>{
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
            return new Promise((resolve, reject)=>{
                failedQueue.push({
                    resolve,
                    reject
                });
            }).then(()=>axiosInstance(originalRequest)).catch((err)=>Promise.reject(err));
        }
        originalRequest._retry = true;
        isRefreshing = true;
        try {
            // Call refresh endpoint - cookies are sent automatically
            await axiosInstance.post("api/auth/refresh-token");
            processQueue(null, true);
            isRefreshing = false;
            return axiosInstance(originalRequest);
        } catch (refreshError) {
            processQueue(refreshError, null);
            isRefreshing = false;
            if ("TURBOPACK compile-time truthy", 1) {
                window.location.href = "/login";
            }
            return Promise.reject(refreshError);
        }
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosInstance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/store/userStore.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/store/userStore.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useUserStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        admin: null,
        isAuthenticated: false,
        setAdmin: (adminData)=>set({
                admin: adminData,
                isAuthenticated: true
            }),
        clearAdmin: ()=>set({
                admin: null,
                isAuthenticated: false
            })
    }), {
    name: "adminStorage",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage)
}));
const __TURBOPACK__default__export__ = useUserStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/SessionManager.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SessionManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/axiosInstance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$userStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/userStore.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SessionManager({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setAdmin, clearAdmin, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$userStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const refreshTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Check session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionManager.useEffect": ()=>{
            const checkSession = {
                "SessionManager.useEffect.checkSession": async ()=>{
                    try {
                        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("api/auth/me");
                        if (data.success) {
                            setAdmin(data.data.user);
                        }
                    } catch (error) {
                        console.error("Session check failed:", error);
                        clearAdmin();
                    }
                }
            }["SessionManager.useEffect.checkSession"];
            checkSession();
        }
    }["SessionManager.useEffect"], [
        setAdmin,
        clearAdmin
    ]);
    // Proactive token refresh - every 10 minutes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionManager.useEffect": ()=>{
            if (!isAuthenticated) return;
            const startRefreshTimer = {
                "SessionManager.useEffect.startRefreshTimer": ()=>{
                    refreshTimerRef.current = setInterval({
                        "SessionManager.useEffect.startRefreshTimer": async ()=>{
                            try {
                                await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("api/auth/refresh-token");
                                console.log("Token refreshed proactively");
                            } catch (error) {
                                console.error("Proactive refresh failed:", error);
                                clearAdmin();
                                router.push("/login");
                            }
                        }
                    }["SessionManager.useEffect.startRefreshTimer"], 10 * 60 * 1000); // 10 minutes
                }
            }["SessionManager.useEffect.startRefreshTimer"];
            startRefreshTimer();
            return ({
                "SessionManager.useEffect": ()=>{
                    if (refreshTimerRef.current) {
                        clearInterval(refreshTimerRef.current);
                    }
                }
            })["SessionManager.useEffect"];
        }
    }["SessionManager.useEffect"], [
        isAuthenticated,
        clearAdmin,
        router
    ]);
    // Handle app visibility changes (mobile background/foreground)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionManager.useEffect": ()=>{
            const handleVisibilityChange = {
                "SessionManager.useEffect.handleVisibilityChange": async ()=>{
                    if (document.visibilityState === "visible" && isAuthenticated) {
                        try {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("api/auth/refresh-token");
                            console.log("Token refreshed on app resume");
                        } catch (error) {
                            console.error("Resume refresh failed:", error);
                            clearAdmin();
                            router.push("/login");
                        }
                    }
                }
            }["SessionManager.useEffect.handleVisibilityChange"];
            document.addEventListener("visibilitychange", handleVisibilityChange);
            return ({
                "SessionManager.useEffect": ()=>{
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                }
            })["SessionManager.useEffect"];
        }
    }["SessionManager.useEffect"], [
        isAuthenticated,
        clearAdmin,
        router
    ]);
    return children;
}
_s(SessionManager, "7aqD5E7fNQCyK/fIc+m7YTtadJY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$userStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = SessionManager;
var _c;
__turbopack_context__.k.register(_c, "SessionManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_073fb797._.js.map